"use client";

import Link from "next/link";
import { useTransition } from "react";
import {
  ChevronDown,
  LogOut,
  Settings,
  User,
  UserCircle,
} from "lucide-react";

import { signOut } from "@/lib/auth/actions";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserNav() {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="flex items-center gap-2"
        >
          <UserCircle className="h-5 w-5" />

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium">
              Abdullah
            </p>

            <p className="text-xs text-muted-foreground">
              Student
            </p>
          </div>

          <ChevronDown className="h-4 w-4 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuItem>
          <Link
            href="/dashboard/profile"
            className="flex w-full items-center gap-2"
          >
            <User className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link
            href="/dashboard/settings"
            className="flex w-full items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await signOut();
            })
          }
        >
          <LogOut className="h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}