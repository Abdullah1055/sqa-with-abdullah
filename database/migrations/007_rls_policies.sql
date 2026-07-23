-- =====================================================
-- Migration: 007_rls_policies.sql
-- Description: Row Level Security Policies
-- =====================================================

-- =====================================================
-- PROFILES
-- =====================================================

create policy "Users can view their own profile"
on public.profiles
for select
using (
    auth.uid() = id
);

create policy "Users can update their own profile"
on public.profiles
for update
using (
    auth.uid() = id
)
with check (
    auth.uid() = id
);

-- =====================================================
-- COURSES
-- =====================================================

create policy "Anyone can view published courses"
on public.courses
for select
using (
    published = true
);

-- =====================================================
-- MODULES
-- =====================================================

create policy "Anyone can view published modules"
on public.modules
for select
using (
    published = true
);

-- =====================================================
-- LESSONS
-- =====================================================

create policy "Anyone can view published lessons"
on public.lessons
for select
using (
    published = true
);

-- =====================================================
-- ENROLLMENTS
-- =====================================================

create policy "Users can view their own enrollments"
on public.enrollments
for select
using (
    auth.uid() = user_id
);

create policy "Users can create their own enrollments"
on public.enrollments
for insert
with check (
    auth.uid() = user_id
);

create policy "Users can update their own enrollments"
on public.enrollments
for update
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);

-- =====================================================
-- PROGRESS
-- =====================================================

create policy "Users can view their own progress"
on public.progress
for select
using (
    auth.uid() = user_id
);

create policy "Users can insert their own progress"
on public.progress
for insert
with check (
    auth.uid() = user_id
);

create policy "Users can update their own progress"
on public.progress
for update
using (
    auth.uid() = user_id
)
with check (
    auth.uid() = user_id
);