-- =====================================================
-- Migration: 004_lessons.sql
-- Description: Create lessons table
-- =====================================================

create table if not exists public.lessons (

    id uuid primary key default gen_random_uuid(),

    module_id uuid not null
        references public.modules(id)
        on delete cascade,

    title text not null,

    description text,

    video_url text,

    duration integer default 0,

    sort_order integer not null default 1,

    is_preview boolean default false,

    published boolean default false,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists idx_lessons_module
on public.lessons(module_id);

create index if not exists idx_lessons_sort
on public.lessons(module_id, sort_order);

create index if not exists idx_lessons_published
on public.lessons(published);

-- =====================================================
-- Prevent duplicate lesson order inside a module
-- =====================================================

create unique index if not exists idx_lessons_unique_sort
on public.lessons(module_id, sort_order);

-- =====================================================
-- Updated At Trigger
-- =====================================================

create trigger update_lessons_updated_at
before update on public.lessons
for each row
execute function public.update_updated_at_column();

-- =====================================================
-- Enable Row Level Security
-- =====================================================

alter table public.lessons
enable row level security;