import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock, type LucideIcon } from "lucide-react";
import { Container, PageIntro } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { site, whatsappLink, phoneLink, emailLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact a Plumber in Krugersdorp | WhatsApp or Call",
  description: `WhatsApp or call Plumber Near Me on ${site.contact.phoneDisplay} for plumbing, piping and toilet repairs in Krugersdorp and across South Africa.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact Plumber Near Me" },
};

type Item = { icon: LucideIcon; label: string; value: string; href?: string; external?: boolean; cta?: string };

export default function ContactPage() {
  const items: Item[] = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Fastest way to reach us",
      href: whatsappLink,
      external: true,
      cta: "Start a chat",
    },
    { icon: Phone, label: "Phone", value: site.contact.phoneDisplay, href: phoneLink, cta: "Call now" },
    { icon: Mail, label: "Email", value: site.contact.email, href: emailLink, cta: "Send an email" },
    {
      icon: MapPin,
      label: "Where we are",
      value: site.contact.address ? `${site.contact.address}, ${site.contact.town}` : site.contact.town,
      href: site.contact.mapsLink,
      external: true,
      cta: "Open in Google Maps",
    },
  ];

  if (site.contact.hours) {
    items.push({ icon: Clock, label: "Opening hours", value: site.contact.hours });
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell us what’s leaking."
        lede="WhatsApp is the quickest way to reach us. Send a photo or short video of the problem and where you are."
      />

      <section className="bg-surface pb-16 md:pb-28" aria-label="Contact details">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {items.map((item, i) => {
              const Icon = item.icon;
              const primary = i === 0;
              const body = (
                <>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      primary ? "bg-ink text-brand" : "bg-white text-ink"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className={`mt-8 text-[15px] font-medium ${primary ? "text-ink/75" : "text-muted"}`}>{item.label}</p>
                  <p className="mt-1 text-[24px] font-semibold tracking-[-0.02em] break-words text-ink md:text-[28px]">
                    {item.value}
                  </p>
                  {item.cta && (
                    <p className={`mt-5 text-[17px] font-medium ${primary ? "text-ink" : "text-brand-ink"}`}>
                      {item.cta} ›
                    </p>
                  )}
                </>
              );
              const cls = `block h-full rounded-[24px] p-8 transition-transform md:p-10 ${
                primary ? "bg-brand hover:bg-brand-hover" : "bg-surface-2"
              } ${item.href ? "hover:scale-[1.01]" : ""}`;
              return (
                <Reveal as="li" key={item.label} delay={(i % 2) * 80}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={cls}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-10 rounded-[24px] border border-line p-8 md:p-10">
            <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-ink">Areas we serve</h2>
            <p className="mt-2 max-w-[62ch] text-[17px] leading-relaxed text-muted">
              We’re based in Krugersdorp (Mogale City) and help clients across South Africa. Not sure if we cover your
              area? Just ask on WhatsApp.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
