-- =====================================================
-- Migration: 002_courses.sql
-- Description: Create courses table
-- =====================================================

create table if not exists public.courses (
    id uuid primary key default gen_random_uuid(),

    title text not null,
    slug text not null unique,

    short_description text,
    description text,

    thumbnail_url text,
    trailer_url text,

    price numeric(10,2) default 0,
    discount_price numeric(10,2),

    level text,
    duration text,
    language text default 'English',

    featured boolean default false,
    published boolean default false,

    created_by uuid not null references public.profiles(id) on delete restrict,

    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists idx_courses_slug
on public.courses(slug);

create index if not exists idx_courses_published
on public.courses(published);

create index if not exists idx_courses_featured
on public.courses(featured);

create index if not exists idx_courses_creator
on public.courses(created_by);

-- =====================================================
-- Updated At Trigger
-- =====================================================

create trigger update_courses_updated_at
before update on public.courses
for each row
execute function public.update_updated_at_column();

-- =====================================================
-- Enable RLS
-- =====================================================

alter table public.courses
enable row level security;