"use client";

import Link from "next/link";

import { signIn } from "@/lib/auth/actions";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthHeader } from "@/components/auth/auth-header";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <AuthCard>
      <AuthHeader
        title="Welcome Back"
        description="Sign in to continue your learning journey."
      />

      <form action={signIn} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="mt-6 space-y-2 text-center text-sm">
        <Link
          href="/auth/forgot-password"
          className="text-primary hover:underline"
        >
          Forgot Password?
        </Link>

        <p className="text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-primary hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}