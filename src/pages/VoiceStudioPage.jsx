import React, { useEffect, useRef, useState } from "react";
import "../styles/voice-studio.css";

const Icon = ({ name, size = 20 }) => {
  const paths = {
    mic: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/></>,
    wave: <><path d="M3 10v4M7 7v10M11 4v16M15 7v10M19 10v4"/></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5"/><path d="M20 15v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/></>,
    play: <path d="m9 6 8 6-8 6Z"/>,
    stop: <rect x="6" y="6" width="12" height="12" rx="2"/>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
    download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M5 21h14"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.08A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.08A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.08A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.15.38.36.72.6 1 .3.3.7.43 1.1.4h.1v4h-.08A1.7 1.7 0 0 0 19.4 15Z"/></>,
    trash: <><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const DEMO_TEXT = "Xin chào! Đây là giọng nói được tạo bởi VoiceLab. Bạn có thể nhập bất kỳ nội dung nào và biến nó thành âm thanh tự nhiên.";

export default function VoiceStudioPage() {
  const [mode, setMode] = useState("tts");
  const [engine, setEngine] = useState("omnivoice");
  const [text, setText] = useState(DEMO_TEXT);
  const [voiceFile, setVoiceFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState("");
  const [speed, setSpeed] = useState(1);
  const [pitch, setPitch] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [saveFolder, setSaveFolder] = useState(localStorage.getItem("voicelab-save-folder") || "");
  const [savedPath, setSavedPath] = useState("");
  const recorder = useRef(null);
  const chunks = useRef([]);

  useEffect(() => {
    fetch("./data/capcut-voices.json").then((response) => response.json()).then((items) => {
      setVoices(items);
      if (items.length) setSelectedVoice(items[0].voice_type);
    }).catch(() => setVoices([]));
    if (!saveFolder && window.voicelabDesktop) window.voicelabDesktop.getDefaultSaveFolder().then(setSaveFolder);
    return () => window.speechSynthesis?.cancel();
  }, []);

  const chooseFile = (event, setter) => {
    const file = event.target.files?.[0];
    if (file) setter(file);
  };

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setStatus("");
    setResult(null);
    window.speechSynthesis?.cancel();
  };

  const toggleRecord = async () => {
    if (isRecording) {
      recorder.current?.stop();
      setIsRecording(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      recorder.current = mediaRecorder;
      mediaRecorder.ondataavailable = (e) => chunks.current.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        const file = new File([blob], `ban-thu-${Date.now()}.webm`, { type: blob.type });
        mode === "tts" ? setVoiceFile(file) : setAudioFile(file);
        stream.getTracks().forEach((track) => track.stop());
      };
      mediaRecorder.start();
      setIsRecording(true);
    } catch { setStatus("Không thể truy cập micro. Hãy cấp quyền rồi thử lại."); }
  };

  const runTask = async () => {
    if (mode === "tts" && !text.trim()) return setStatus("Hãy nhập nội dung cần đọc.");
    if (mode === "stt" && !audioFile) return setStatus("Hãy tải lên hoặc thu một file âm thanh.");
    if (mode === "tts" && engine === "omnivoice" && !voiceFile) return setStatus("Hãy thêm mẫu giọng 3–10 giây để clone.");
    setIsRunning(true); setStatus("Đang xử lý âm thanh…"); setResult(null);
    const endpoint = import.meta.env.VITE_VOICE_API_URL;
    if (endpoint) {
      try {
        const body = new FormData();
        body.append("mode", mode); body.append("engine", engine); body.append("text", text);
        body.append("speed", speed); body.append("pitch", pitch);
        const voice = voices.find((item) => item.voice_type === selectedVoice);
        if (voice) { body.append("voice", voice.voice_type); body.append("resource_id", voice.resource_id); body.append("language", voice.lang); }
        if (voiceFile) body.append("reference_audio", voiceFile);
        if (audioFile) body.append("audio", audioFile);
        const response = await fetch(`${endpoint.replace(/\/$/, "")}/${mode}`, { method: "POST", body });
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        setResult(data);
      } catch (error) { setStatus(`API chưa sẵn sàng: ${error.message}`); setIsRunning(false); return; }
    } else if (mode === "tts" && window.voicelabDesktop) {
      try {
        const chosenVoice = voices.find((item) => item.voice_type === selectedVoice);
        const voiceIndex = voices.findIndex((item) => item.voice_type === selectedVoice);
        const local = await window.voicelabDesktop.synthesizeLocalVoice({ text, folder: saveFolder, speed, voiceType: chosenVoice?.voice_type, voiceName: chosenVoice?.display_name, language: chosenVoice?.lang, voiceIndex });
        setSavedPath(local.filePath);
        setResult({ type: "audio", title: `Đã tạo: ${local.voice}`, detail: `${local.baseVoice} · pitch ${local.pitch} · rate ${local.rate} · ${local.filePath}`, file_path: local.filePath, format: local.format });
      } catch (error) { setStatus(`Không thể tạo file local: ${error.message}`); setIsRunning(false); return; }
    } else if (mode === "tts") {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "vi-VN"; utterance.rate = speed; utterance.pitch = 1 + pitch / 12;
      window.speechSynthesis.cancel(); window.speechSynthesis.speak(utterance);
      setResult({ type: "preview", title: "Bản xem trước trên trình duyệt", detail: `${text.length} ký tự · ${engine === "omnivoice" ? "OmniVoice" : "CapCut"}` });
    } else {
      setResult({ type: "transcript", text: "Kết nối backend CapCut STT để nhận bản chép lời có timestamp tại đây.", detail: audioFile.name });
    }
    const historyEngine = !endpoint && mode === "tts" && window.voicelabDesktop ? "local" : engine;
    const entry = { id: Date.now(), mode, engine: historyEngine, title: mode === "tts" ? text.slice(0, 48) : audioFile?.name, time: "Vừa xong" };
    setHistory((items) => [entry, ...items].slice(0, 5));
    setStatus(""); setIsRunning(false);
  };

  const chooseSaveFolder = async () => {
    if (!window.voicelabDesktop) return setStatus("Tính năng chọn thư mục chỉ có trong ứng dụng macOS.");
    const folder = await window.voicelabDesktop.chooseSaveFolder();
    if (folder) { setSaveFolder(folder); localStorage.setItem("voicelab-save-folder", folder); }
  };

  const saveResult = async () => {
    if (result?.file_path) {
      setSavedPath(result.file_path);
      setStatus(`File đã được lưu: ${result.file_path}`);
      return window.voicelabDesktop?.showSavedFile(result.file_path);
    }
    const source = result?.audio_url || result?.url;
    const base64 = result?.audio_base64;
    if (!source && !base64) return setStatus("Bản xem trước không tạo file. Hãy kết nối backend để xuất WAV/MP3.");
    try {
      let bytes;
      if (base64) bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
      else bytes = new Uint8Array(await (await fetch(source)).arrayBuffer());
      const filename = `voicelab-${new Date().toISOString().replace(/[:.]/g, "-")}.${result?.format || "wav"}`;
      if (window.voicelabDesktop) {
        const filePath = await window.voicelabDesktop.saveFile({ folder: saveFolder, filename, bytes });
        setSavedPath(filePath); setStatus(`Đã lưu: ${filePath}`);
      } else {
        const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([bytes])); link.download = filename; link.click();
      }
    } catch (error) { setStatus(`Không thể lưu file: ${error.message}`); }
  };

  return <div className="voice-app">
    <aside className="voice-sidebar">
      <div className="voice-brand"><span className="voice-brand-mark"><Icon name="wave" size={22}/></span><span>Voice<span>Lab</span></span></div>
      <nav>
        <button className={mode === "tts" ? "active" : ""} onClick={() => changeMode("tts")}><Icon name="wave"/>Tạo giọng nói</button>
        <button className={mode === "stt" ? "active" : ""} onClick={() => changeMode("stt")}><Icon name="mic"/>Chuyển thành văn bản</button>
      </nav>
      <div className="sidebar-spacer"/>
      <div className="unlimited-card"><Icon name="wave" size={17}/><div><b>Tạo không giới hạn</b><span>Không giới hạn số phút</span></div></div>
      <button className="settings-link" onClick={() => setShowSettings(true)}><Icon name="settings"/>Cài đặt</button>
      <div className="user-row"><div className="avatar">MD</div><div><b>Minh Đức</b><span>VoiceLab Local</span></div><Icon name="chevron" size={16}/></div>
    </aside>

    <main className="voice-main">
      <header className="mobile-head"><div className="voice-brand"><span className="voice-brand-mark"><Icon name="wave" size={20}/></span><span>Voice<span>Lab</span></span></div><div className="avatar">MD</div></header>
      <div className="voice-topline"><div><span className="eyebrow">AI VOICE STUDIO</span><h1>{mode === "tts" ? "Biến văn bản thành giọng nói" : "Biến âm thanh thành văn bản"}</h1><p>{mode === "tts" ? "Clone giọng nói tự nhiên từ một đoạn thu âm ngắn." : "Tạo bản chép lời chính xác, có mốc thời gian."}</p></div><span className="secure-pill"><i/><Icon name="check" size={14}/> Dữ liệu được xử lý riêng tư</span></div>

      <section className="studio-grid">
        <div className="studio-card editor-card">
          {mode === "tts" ? <>
            <div className="field-head"><label>Nội dung</label><span>{text.length} / 5.000</span></div>
            <textarea value={text} maxLength={5000} onChange={(e) => setText(e.target.value)} placeholder="Nhập nội dung bạn muốn chuyển thành giọng nói…"/>
            <div className="engine-row"><label>Engine xử lý</label><div className="segmented"><button className={engine === "omnivoice" ? "active" : ""} onClick={() => setEngine("omnivoice")}>OmniVoice <em>Clone</em></button><button className={engine === "capcut" ? "active" : ""} onClick={() => setEngine("capcut")}>CapCut TTS</button></div></div>
          </> : <UploadZone file={audioFile} onFile={(e) => chooseFile(e, setAudioFile)} recording={isRecording} onRecord={toggleRecord} title="Thả file âm thanh hoặc video vào đây" />}
        </div>

        <div className="studio-card controls-card">
          <div className="card-title"><span>{mode === "tts" ? "01" : "02"}</span><div><h2>{mode === "tts" ? (engine === "omnivoice" ? "Mẫu giọng của bạn" : "Chọn giọng đọc") : "Ngôn ngữ nhận diện"}</h2><p>{mode === "tts" && engine === "omnivoice" ? "Đoạn rõ tiếng, không nhạc nền" : "Tối ưu cho tiếng Việt"}</p></div></div>
          {mode === "tts" && engine === "omnivoice" ? <UploadZone file={voiceFile} onFile={(e) => chooseFile(e, setVoiceFile)} recording={isRecording} onRecord={toggleRecord} compact title="Tải lên mẫu giọng 3–10 giây"/> : mode === "tts" ? <div className="voice-picker"><select className="voice-select" value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)}>{voices.map((voice) => <option key={`${voice.voice_type}-${voice.resource_id}`} value={voice.voice_type}>{voice.display_name} · {voice.lang}</option>)}</select><small>{voices.length} lựa chọn · ánh xạ sang voice engine macOS riêng</small></div> : <select className="voice-select"><option>Tiếng Việt (vi-VN)</option><option>English (en-US)</option><option>中文 (zh-CN)</option><option>日本語 (ja-JP)</option><option>한국어 (ko-KR)</option></select>}
          {mode === "tts" && <div className="sliders"><Range label="Tốc độ" value={speed} min={0.5} max={1.5} step={0.1} display={`${speed.toFixed(1)}×`} onChange={setSpeed}/><Range label="Cao độ" value={pitch} min={-6} max={6} step={1} display={pitch > 0 ? `+${pitch}` : pitch} onChange={setPitch}/></div>}
          <button className="generate-btn" disabled={isRunning} onClick={runTask}>{isRunning ? <span className="spinner"/> : <Icon name={mode === "tts" ? "wave" : "mic"}/>} {isRunning ? "Đang xử lý…" : mode === "tts" ? "Tạo giọng nói" : "Bắt đầu chuyển đổi"}</button>
          {status && <div className="status-note">{status}</div>}
          <p className="consent">Bằng việc tiếp tục, bạn xác nhận có quyền sử dụng giọng nói và nội dung đã tải lên.</p>
        </div>
      </section>

      {(result || history.length > 0) && <section className="results-section">
        {result && <div className="result-card"><div className="result-icon"><Icon name={mode === "tts" ? "play" : "copy"}/></div><div className="result-copy"><small>KẾT QUẢ MỚI NHẤT</small><b>{result.title || (mode === "tts" ? "Giọng nói đã sẵn sàng" : "Bản chép lời")}</b><p>{result.text || result.detail}</p></div><button className="icon-btn" onClick={mode === "tts" ? saveResult : () => result.text && navigator.clipboard.writeText(result.text)}><Icon name={mode === "tts" ? "download" : "copy"}/></button></div>}
        <div className="history-head"><h2>Hoạt động gần đây</h2>{history.length > 0 && <button onClick={() => setHistory([])}><Icon name="trash" size={16}/> Xóa</button>}</div>
        <div className="history-list">{history.map((item) => <div key={item.id}><span className="history-type"><Icon name={item.mode === "tts" ? "wave" : "mic"} size={17}/></span><b>{item.title}</b><em>{item.engine === "omnivoice" ? "OmniVoice" : item.engine === "local" ? "Mac Local" : "CapCut"}</em><small>{item.time}</small><Icon name="chevron" size={16}/></div>)}</div>
      </section>}
    </main>
    {showSettings && <div className="modal-backdrop" onMouseDown={() => setShowSettings(false)}><div className="settings-modal" onMouseDown={(event) => event.stopPropagation()}><div className="modal-head"><div><span className="eyebrow">CÀI ĐẶT</span><h2>Lưu file đầu ra</h2></div><button onClick={() => setShowSettings(false)}>×</button></div><p>Chọn thư mục mặc định cho file WAV, MP3 và bản chép lời.</p><label>Thư mục lưu</label><div className="folder-row"><span>{saveFolder || "Chưa chọn thư mục"}</span><button onClick={chooseSaveFolder}>Chọn…</button></div>{savedPath && <button className="show-file" onClick={() => window.voicelabDesktop?.showSavedFile(savedPath)}>Hiện file vừa lưu trong Finder</button>}<button className="modal-done" onClick={() => setShowSettings(false)}>Hoàn tất</button></div></div>}
  </div>;
}

function UploadZone({ file, onFile, recording, onRecord, title, compact = false }) {
  return <div className={`upload-zone ${compact ? "compact" : ""} ${file ? "has-file" : ""}`}>
    <input type="file" accept="audio/*,video/*" onChange={onFile}/>
    <span className="upload-icon"><Icon name={file ? "check" : "upload"}/></span>
    <b>{file ? file.name : title}</b><p>{file ? `${(file.size / 1024 / 1024).toFixed(2)} MB · Sẵn sàng` : "MP3, WAV, M4A hoặc MP4 · tối đa 100 MB"}</p>
    <div className="or"><i/>hoặc<i/></div>
    <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onRecord(); }} className={recording ? "recording" : ""}><Icon name={recording ? "stop" : "mic"} size={17}/>{recording ? "Dừng thu" : "Thu âm ngay"}</button>
  </div>;
}

function Range({ label, value, min, max, step, display, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return <div className="range-field"><div><label>{label}</label><span>{display}</span></div><input type="range" min={min} max={max} step={step} value={value} style={{ "--fill": `${pct}%` }} onChange={(e) => onChange(Number(e.target.value))}/></div>;
}
