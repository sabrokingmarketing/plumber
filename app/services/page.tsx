import type { Metadata } from "next";
import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { Container, PageIntro } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Plumbing Services in Krugersdorp | Pipes & Toilets",
  description:
    "Plumbing repairs, piping and toilet repairs and installations from a local Krugersdorp plumber, serving homes, schools and businesses across South Africa.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "Plumbing services | Plumber Near Me" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Plumbing, piping and toilets."
        lede="Everything that carries water through your home, school or business. Tell us what’s wrong and we’ll sort it out."
      />

      <div className="bg-surface pb-16 md:pb-28">
        <Container className="space-y-5 md:space-y-6">
          {site.services.map((s, i) => (
            <Reveal
              as="section"
              key={s.slug}
              className="scroll-mt-24 overflow-hidden rounded-[28px] bg-surface-2"
            >
              <div id={s.slug} className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="zoom-img relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[520px]">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-14">
                  <p className="text-[15px] font-medium text-brand-ink">0{i + 1}</p>
                  <h2 className="headline mt-2 text-[36px] md:text-[48px]">{s.name}</h2>
                  <p className="lede mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted md:text-[19px]">
                    {s.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[17px] text-ink">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                          <Check className="h-3.5 w-3.5 text-ink" strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-ink px-7 text-[17px] font-medium text-white transition-colors hover:bg-black"
                  >
                    <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    Ask about {s.name.toLowerCase()}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </div>

      <CtaSection title="Not sure what you need?" text="Send us a photo on WhatsApp and we’ll tell you what’s wrong and how we can fix it." />
    </>
  );
}
