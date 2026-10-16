import Link from "next/link";
import { Logo } from "./logo";
import { nav, site, phoneLink, emailLink, whatsappLink } from "@/content/site";

export function Footer() {
  const socials = [
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
    { label: "LinkedIn", href: site.social.linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="bg-night text-night-muted">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-24 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              Local plumbing from Krugersdorp. Plumbing, piping and toilets for homes, schools and businesses across
              South Africa.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-white">Pages</h2>
            <ul className="mt-4 space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1.5 text-[15px] transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="inline-block py-1.5 text-[15px] transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-1 text-[15px]">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-white">
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={phoneLink} className="inline-block py-1.5 hover:text-white">
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={emailLink} className="inline-block py-1.5 break-all hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li className="py-1.5">{site.contact.town}</li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-dark pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy (POPIA)
          </Link>
        </div>
      </div>
    </footer>
  );
}
