const { app, BrowserWindow, session, shell, ipcMain, dialog } = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');
const { execFile, execFileSync } = require('child_process');
const { promisify } = require('util');
const execFileAsync = promisify(execFile);

app.setName('VoiceLab');

function installedMacVoices() {
  try {
    return execFileSync('/usr/bin/say', ['-v', '?'], { encoding: 'utf8' }).split('\n').map((line) => {
      const match = line.match(/^(.*?)\s+([a-z]{2}_[A-Z0-9]+)\s+#/);
      return match ? { name: match[1].trim(), locale: match[2] } : null;
    }).filter(Boolean);
  } catch {
    return [{ name: 'Linh', locale: 'vi_VN' }, { name: 'Samantha', locale: 'en_US' }];
  }
}

const MAC_VOICES = installedMacVoices();

function startLocalServer() {
  const root = path.join(__dirname, '..', 'dist');
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' };
  return new Promise((resolve) => {
    const server = http.createServer((request, response) => {
      const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
      const relative = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
      const target = path.resolve(root, relative);
      const file = target.startsWith(root) && fs.existsSync(target) && fs.statSync(target).isFile() ? target : path.join(root, 'index.html');
      response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      fs.createReadStream(file).pipe(response);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

function createWindow(port) {
  const win = new BrowserWindow({
    width: 1380,
    height: 900,
    minWidth: 920,
    minHeight: 650,
    title: 'VoiceLab',
    backgroundColor: '#f7f9f8',
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 18, y: 18 },
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  win.loadURL(`http://127.0.0.1:${port}/`);
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://')) shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(async () => {
  ipcMain.handle('get-default-save-folder', () => app.getPath('downloads'));
  ipcMain.handle('choose-save-folder', async () => {
    const result = await dialog.showOpenDialog({ properties: ['openDirectory', 'createDirectory'], title: 'Chọn thư mục lưu file VoiceLab' });
    return result.canceled ? null : result.filePaths[0];
  });
  ipcMain.handle('save-output-file', async (_event, { folder, filename, bytes }) => {
    const safeName = String(filename || `voicelab-${Date.now()}.wav`).replace(/[^a-zA-Z0-9._-]/g, '-');
    const destination = path.join(folder || app.getPath('downloads'), safeName);
    await fs.promises.writeFile(destination, Buffer.from(bytes));
    return destination;
  });
  ipcMain.handle('show-saved-file', (_event, filePath) => shell.showItemInFolder(filePath));
  ipcMain.handle('synthesize-local-voice', async (_event, { text, folder, speed, voiceType, voiceName, language, voiceIndex }) => {
    const targetFolder = folder || app.getPath('downloads');
    await fs.promises.mkdir(targetFolder, { recursive: true });
    const filename = `voicelab-${new Date().toISOString().replace(/[:.]/g, '-')}.aiff`;
    const destination = path.join(targetFolder, filename);
    const presetIndex = Number.isInteger(voiceIndex) && voiceIndex >= 0 ? voiceIndex : 0;
    const macVoice = MAC_VOICES[presetIndex % MAC_VOICES.length] || MAC_VOICES[0];
    const baseVoice = macVoice.name;
    const pitch = 45 + (presetIndex % 11);
    const rateVariant = 0.94 + (presetIndex % 7) * 0.02;
    const wordsPerMinute = String(Math.max(80, Math.min(340, Math.round(175 * Number(speed || 1) * rateVariant))));
    const renderedText = `[[pbas ${pitch}]] ${String(text)}`;
    await execFileAsync('/usr/bin/say', ['-v', baseVoice, '-r', wordsPerMinute, '-o', destination, renderedText]);
    return { filePath: destination, format: 'aiff', voice: `${voiceName || baseVoice} · Local Variant`, baseVoice, locale: macVoice.locale, pitch, rate: wordsPerMinute, presetIndex, availableVoices: MAC_VOICES.length };
  });
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(permission === 'media');
  });
  const { port } = await startLocalServer();
  createWindow(port);
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(port);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
