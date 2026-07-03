import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Newsletter } from "@/components/sections/newsletter";
import { site } from "@/lib/site-data";

const columns = [
  {
    title: "Learn",
    links: [
      { label: "All Courses", href: "/courses" },
      { label: "Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Free Live Class", href: "/contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
] as const;

const socialLinks = [
  {
    href: site.social.youtube,
    icon: Globe,
    label: "YouTube",
  },
  {
    href: site.social.linkedin,
    icon: Globe,
    label: "LinkedIn",
  },
  {
    href: site.social.github,
    icon: Globe,
    label: "GitHub",
  },
  {
    href: site.social.facebook,
    icon: Globe,
    label: "Facebook",
  },
  {
    href: site.social.x,
    icon: Globe,
    label: "X",
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1.4fr]">
          <div className="space-y-4">
            <Logo />

            <p className="max-w-sm text-sm text-muted-foreground">
              {site.description}
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{site.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>{site.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {column.title}
                </h4>

                <ul className="mt-4 space-y-2.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Newsletter compact />
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <p>Built with care for aspiring QA engineers in Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
}