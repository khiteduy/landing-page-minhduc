import { requireUser, sendError } from "./_auth.js";

export const config = { api: { bodyParser: false } };

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Expose-Headers", "Location, Stream-Media-Id");
    return response.status(204).end();
  }
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  try {
    const { profile } = await requireUser(request);
    if (profile.role !== "admin" || profile.status !== "active") {
      return response.status(403).json({ error: "Chỉ quản trị viên được đăng video." });
    }
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_STREAM_API_TOKEN;
    if (!accountId || !apiToken) return response.status(503).json({ error: "Cloudflare Stream chưa được cấu hình." });

    const cloudflareResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/stream?direct_user=true`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Tus-Resumable": request.headers["tus-resumable"] || "1.0.0",
        "Upload-Length": request.headers["upload-length"],
        "Upload-Metadata": request.headers["upload-metadata"] || "",
        "Upload-Creator": profile.id,
      },
    });
    const location = cloudflareResponse.headers.get("Location");
    if (!cloudflareResponse.ok || !location) {
      const detail = await cloudflareResponse.text();
      throw new Error(`Không tạo được phiên upload: ${detail.slice(0, 180)}`);
    }
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Expose-Headers", "Location, Stream-Media-Id");
    response.setHeader("Tus-Resumable", "1.0.0");
    response.setHeader("Location", location);
    const mediaId = cloudflareResponse.headers.get("stream-media-id");
    if (mediaId) response.setHeader("Stream-Media-Id", mediaId);
    return response.status(201).end();
  } catch (error) {
    return sendError(response, error);
  }
}
