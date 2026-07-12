-- =====================================================
-- Migration: 003_modules.sql
-- Description: Create modules table
-- =====================================================

create table if not exists public.modules (

    id uuid primary key default gen_random_uuid(),

    course_id uuid not null
        references public.courses(id)
        on delete cascade,

    title text not null,

    description text,

    sort_order integer not null default 1,

    is_preview boolean default false,

    published boolean default false,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists idx_modules_course
on public.modules(course_id);

create index if not exists idx_modules_sort
on public.modules(course_id, sort_order);

create index if not exists idx_modules_published
on public.modules(published);

-- =====================================================
-- Prevent duplicate module order inside a course
-- =====================================================

create unique index if not exists idx_modules_unique_sort
on public.modules(course_id, sort_order);

-- =====================================================
-- Updated At Trigger
-- =====================================================

create trigger update_modules_updated_at
before update on public.modules
for each row
execute function public.update_updated_at_column();

-- =====================================================
-- Enable Row Level Security
-- =====================================================

alter table public.modules
enable row level security;