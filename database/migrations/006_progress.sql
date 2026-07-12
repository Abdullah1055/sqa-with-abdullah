-- =====================================================
-- Migration: 006_progress.sql
-- Description: Create lesson progress table
-- =====================================================

create table if not exists public.progress (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null
        references public.profiles(id)
        on delete cascade,

    lesson_id uuid not null
        references public.lessons(id)
        on delete cascade,

    is_completed boolean not null default false,

    completed_at timestamptz,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

-- =====================================================
-- Prevent duplicate lesson progress
-- =====================================================

create unique index if not exists idx_progress_unique
on public.progress(user_id, lesson_id);

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists idx_progress_user
on public.progress(user_id);

create index if not exists idx_progress_lesson
on public.progress(lesson_id);

create index if not exists idx_progress_completed
on public.progress(is_completed);

-- =====================================================
-- Updated At Trigger
-- =====================================================

create trigger update_progress_updated_at
before update on public.progress
for each row
execute function public.update_updated_at_column();

-- =====================================================
-- Enable Row Level Security
-- =====================================================

alter table public.progress
enable row level security;