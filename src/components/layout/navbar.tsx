"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { nav } from "@/lib/site-data";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container-page flex h-[72px] items-center justify-between gap-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav
  aria-label="Primary Navigation"
  className="hidden items-center gap-2 lg:flex"
>
  {nav.map((item) => {
    const active = isActive(item.to);

    return (
      <Link
        key={item.to}
        href={item.to}
        className={`relative rounded-lg px-4 py-2 text-[15px] font-medium transition-all duration-200 ${
          active
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        {item.label}

        <span
          className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-300 ${
            active ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </Link>
    );
  })}
</nav>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            Log in
          </Link>

          <Button
            asChild
            size="lg"
            className="hidden h-10 rounded-xl px-4 sm:inline-flex"
          >
            <Link href="/contact">
              Join Free Live Class
              <ArrowRight
                className="ml-2 h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            aria-label="Mobile Navigation"
            className="container-page flex flex-col gap-1 py-3"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(item.to)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 grid gap-2 border-t border-border pt-3">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-xl"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Join Free Live Class
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-xl"
              >
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}