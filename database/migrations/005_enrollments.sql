-- =====================================================
-- Migration: 005_enrollments.sql
-- Description: Create enrollments table
-- =====================================================

create table if not exists public.enrollments (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null
        references public.profiles(id)
        on delete cascade,

    course_id uuid not null
        references public.courses(id)
        on delete cascade,

    status text not null default 'active'
        check (status in ('active', 'completed', 'cancelled')),

    enrolled_at timestamptz not null default now(),

    completed_at timestamptz,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

-- =====================================================
-- Prevent duplicate enrollments
-- =====================================================

create unique index if not exists idx_enrollments_unique
on public.enrollments(user_id, course_id);

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists idx_enrollments_user
on public.enrollments(user_id);

create index if not exists idx_enrollments_course
on public.enrollments(course_id);

create index if not exists idx_enrollments_status
on public.enrollments(status);

-- =====================================================
-- Updated At Trigger
-- =====================================================

create trigger update_enrollments_updated_at
before update on public.enrollments
for each row
execute function public.update_updated_at_column();

-- =====================================================
-- Enable Row Level Security
-- =====================================================

alter table public.enrollments
enable row level security;