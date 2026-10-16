"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./logo";
import { nav, whatsappLink, phoneLink, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/[0.72] backdrop-blur-[20px] backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-[15px] transition-colors ${
                    isActive(item.href) ? "text-ink font-medium" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLink}
            className="hidden min-h-11 items-center gap-2 rounded-full px-3 text-[15px] text-ink transition-colors hover:text-brand-ink lg:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center rounded-full bg-brand px-5 text-[15px] font-medium text-ink transition-colors hover:bg-brand-hover sm:inline-flex"
          >
            Get help now
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-black/5 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex h-dvh flex-col bg-white md:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-black/5"
              aria-label="Close menu"
              autoFocus
            >
              <X className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pt-6">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block py-5 text-3xl font-semibold tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid gap-3 border-t border-line p-5 pb-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-full bg-brand text-[17px] font-medium text-ink"
            >
              WhatsApp us
            </a>
            <a
              href={phoneLink}
              className="flex min-h-12 items-center justify-center rounded-full border border-line text-[17px] font-medium text-ink"
            >
              Call {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
