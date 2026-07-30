import { requireUser, sendError } from "./_auth.js";

export default async function handler(request, response) {
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  try {
    const { user, profile, client } = await requireUser(request);
    if (profile.status !== "active") return response.status(403).json({ error: "Tài khoản chưa được kích hoạt." });
    const lessonId = request.query.lessonId;
    const { data: lesson } = await client
      .from("lessons")
      .select("id,cloudflare_video_uid,module:course_modules(course_id)")
      .eq("id", lessonId)
      .single();
    if (!lesson?.cloudflare_video_uid) return response.status(404).json({ error: "Video chưa sẵn sàng." });

    if (profile.role !== "admin") {
      const { data: enrollment } = await client.from("enrollments").select("id").eq("user_id", user.id).eq("course_id", lesson.module.course_id).maybeSingle();
      if (!enrollment) return response.status(403).json({ error: "Bạn chưa được cấp quyền cho khóa học này." });
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_STREAM_API_TOKEN;
    const customerCode = process.env.CLOUDFLARE_STREAM_CUSTOMER_CODE;
    if (!accountId || !apiToken || !customerCode) return response.status(503).json({ error: "Cloudflare Stream chưa được cấu hình." });
    const tokenResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${lesson.cloudflare_video_uid}/token`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 3600 }),
    });
    const payload = await tokenResponse.json();
    const token = payload?.result?.token;
    if (!tokenResponse.ok || !token) throw new Error("Không tạo được quyền phát video.");
    response.setHeader("Cache-Control", "private, no-store");
    return response.status(200).json({
      playerUrl: `https://customer-${customerCode}.cloudflarestream.com/${token}/iframe`,
      expiresIn: 3600,
    });
  } catch (error) {
    return sendError(response, error);
  }
}
