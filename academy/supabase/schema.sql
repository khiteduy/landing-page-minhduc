create extension if not exists "pgcrypto";

create type public.user_role as enum ('student', 'admin');
create type public.account_status as enum ('pending', 'active', 'suspended');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null default '',
  phone text not null default '',
  role public.user_role not null default 'student',
  status public.account_status not null default 'pending',
  created_at timestamptz not null default now(),
  activated_at timestamptz
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null default '',
  cover_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules(id) on delete cascade,
  title text not null,
  description text not null default '',
  cloudflare_video_uid text,
  duration_seconds integer,
  position integer not null default 0,
  is_preview boolean not null default false,
  is_published boolean not null default false,
  attachment_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  access_type text not null default 'lifetime' check (access_type = 'lifetime'),
  granted_by uuid references public.profiles(id),
  granted_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table public.lesson_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  watched_seconds integer not null default 0,
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key(user_id, lesson_id)
);

create index enrollments_user_idx on public.enrollments(user_id);
create index modules_course_position_idx on public.course_modules(course_id, position);
create index lessons_module_position_idx on public.lessons(module_id, position);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from profiles where id = auth.uid() and role = 'admin' and status = 'active'); $$;

create or replace function public.has_course_access(target_course uuid)
returns boolean language sql stable security definer set search_path = public
as $$
  select exists(
    select 1 from enrollments e
    join profiles p on p.id = e.user_id
    where e.user_id = auth.uid() and e.course_id = target_course and p.status = 'active'
  );
$$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into profiles(id, email, full_name)
  values(new.id, coalesce(new.email, ''), coalesce(new.raw_user_meta_data->>'full_name', ''));
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.course_modules enable row level security;
alter table public.lessons enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;

create policy "profile self read" on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy "profile admin update" on public.profiles for update using (public.is_admin());
create policy "courses enrolled read" on public.courses for select using (public.is_admin() or public.has_course_access(id));
create policy "courses admin all" on public.courses for all using (public.is_admin()) with check (public.is_admin());
create policy "modules enrolled read" on public.course_modules for select using (public.is_admin() or public.has_course_access(course_id));
create policy "modules admin all" on public.course_modules for all using (public.is_admin()) with check (public.is_admin());
create policy "lessons enrolled read" on public.lessons for select using (
  public.is_admin() or exists(
    select 1 from public.course_modules m where m.id = module_id and public.has_course_access(m.course_id)
  )
);
create policy "lessons admin all" on public.lessons for all using (public.is_admin()) with check (public.is_admin());
create policy "enrollment self read" on public.enrollments for select using (user_id = auth.uid() or public.is_admin());
create policy "enrollment admin all" on public.enrollments for all using (public.is_admin()) with check (public.is_admin());
create policy "progress self read" on public.lesson_progress for select using (user_id = auth.uid() or public.is_admin());
create policy "progress self write" on public.lesson_progress for insert with check (user_id = auth.uid());
create policy "progress self update" on public.lesson_progress for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Sau khi tài khoản chủ hệ thống đăng ký, chạy một lần và thay email:
-- update public.profiles set role = 'admin', status = 'active', activated_at = now()
-- where email = 'EMAIL_ADMIN_CUA_BAN';
