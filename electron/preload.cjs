const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('voicelabDesktop', {
  getDefaultSaveFolder: () => ipcRenderer.invoke('get-default-save-folder'),
  chooseSaveFolder: () => ipcRenderer.invoke('choose-save-folder'),
  saveFile: (payload) => ipcRenderer.invoke('save-output-file', payload),
  showSavedFile: (filePath) => ipcRenderer.invoke('show-saved-file', filePath),
  synthesizeLocalVoice: (payload) => ipcRenderer.invoke('synthesize-local-voice', payload),
});
