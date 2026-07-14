"use client";

import Link from "next/link";

import { signUp } from "@/lib/auth/actions";

import { AuthCard } from "./auth-card";
import { AuthHeader } from "./auth-header";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        description="Start your software testing journey today."
      />

      <form action={signUp} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>

          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Abdullah Al Baky"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="abdullah@example.com"
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
    autoComplete="new-password"
    minLength={8}
    required
  />
</div>

{/* এখানে Add করবে */}
<div className="space-y-2">
  <Label htmlFor="confirmPassword">
    Confirm Password
  </Label>

  <Input
    id="confirmPassword"
    name="confirmPassword"
    type="password"
    autoComplete="new-password"
    minLength={8}
    required
  />
</div>

<Button type="submit" className="w-full">
  Create Account
</Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-primary hover:underline"
        >
          Sign In
        </Link>
      </p>
    </AuthCard>
  );
}
<div className="space-y-2">
  <Label htmlFor="confirmPassword">
    Confirm Password
  </Label>

  <Input
    id="confirmPassword"
    name="confirmPassword"
    type="password"
    autoComplete="new-password"
    minLength={8}
    required
  />
</div>