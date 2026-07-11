-- ==========================================
-- Migration: 001_profiles.sql
-- Description: Create profiles table
-- Project: SQA with Abdullah LMS
-- ==========================================

create table if not exists public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,

    full_name text not null,

    avatar_url text,

    role text not null default 'student'
        check (role in ('admin', 'instructor', 'student')),

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

alter table public.profiles
enable row level security;