import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function VideoPlayer({ lessonId, watermark }) {
  const { session } = useAuth();
  const [src, setSrc] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setSrc("");
    setError("");
    fetch(`/api/playback-token?lessonId=${encodeURIComponent(lessonId)}`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
    })
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || "Không thể phát video");
        return payload;
      })
      .then(({ playerUrl }) => setSrc(playerUrl))
      .catch((err) => setError(err.message));
  }, [lessonId, session.access_token]);

  return (
    <div className="video-wrap">
      {src ? (
        <iframe src={src} title="Video bài giảng" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <div className="video-placeholder">{error || "Đang chuẩn bị video bảo mật…"}</div>
      )}
      {watermark && <span className="video-watermark">{watermark}</span>}
    </div>
  );
}
