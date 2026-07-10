import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { Newsletter } from "@/components/sections/newsletter";
import { site } from "@/lib/site-data";
import { Mail, MapPin } from "lucide-react";

import {
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa6";

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
    icon: FaYoutube,
    label: "YouTube",
    color: "text-red-600 hover:text-red-700",
  },
  {
    href: site.social.linkedin,
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "text-sky-600 hover:text-sky-700",
  },
  {
    href: site.social.github,
    icon: FaGithub,
    label: "GitHub",
    color: "text-gray-600 hover:text-gray-700",
  },
  {
    href: site.social.facebook,
    icon: FaFacebook,
    label: "Facebook",
    color: "text-blue-600 hover:text-blue-700",
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
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                >
                  <Icon className={`h-5 w-5 ${color}`} />
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