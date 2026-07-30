import { createClient } from "@supabase/supabase-js";

export const adminClient = () => createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

export async function requireUser(request) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw Object.assign(new Error("Hệ thống chưa được cấu hình Supabase."), { status: 503 });
  }
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!token) throw Object.assign(new Error("Bạn chưa đăng nhập."), { status: 401 });
  const client = adminClient();
  const { data, error } = await client.auth.getUser(token);
  if (error || !data.user) throw Object.assign(new Error("Phiên đăng nhập không hợp lệ."), { status: 401 });
  const { data: profile } = await client.from("profiles").select("*").eq("id", data.user.id).single();
  if (!profile) throw Object.assign(new Error("Không tìm thấy hồ sơ học viên."), { status: 403 });
  return { user: data.user, profile, client };
}

export function sendError(response, error) {
  response.status(error.status || 500).json({ error: error.message || "Đã xảy ra lỗi." });
}
