import Image from "next/image";
import Link from "next/link";
import { Zap, MapPin, ShieldCheck, School, Briefcase, House, MessageCircle, Quote } from "lucide-react";
import { Container, Section, SectionHeading, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { TrustedBy } from "@/components/trusted-by";
import { site, whatsappLink, phoneLink } from "@/content/site";

const reasonIcons = [Zap, MapPin, ShieldCheck];
const audienceIcons = [School, Briefcase, House];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <section className="bg-surface pt-14 md:pt-24" aria-labelledby="hero-title">
        <Container>
          <Reveal className="mx-auto max-w-[900px] text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-[14px] font-medium text-brand-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              {site.hero.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="headline mt-6 text-[48px] sm:text-[72px] md:text-[96px] md:tracking-[-0.045em]"
            >
              Plumbing, <span className="text-brand-ink">fixed fast.</span>
            </h1>
            <p className="lede mx-auto mt-6 max-w-[38ch] text-[19px] leading-relaxed text-muted md:text-[21px]">
              {site.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-[17px] font-medium text-ink transition-colors hover:bg-brand-hover sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                WhatsApp us now
              </a>
              <TextLink href={phoneLink}>Or call {site.contact.phoneDisplay}</TextLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-12 md:mt-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface-2 sm:aspect-[16/10] md:aspect-[16/8]">
              <Image
                src={site.hero.image}
                alt={site.hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </Reveal>

          {/* TRUST STRIP */}
          <ul className="grid grid-cols-2 gap-y-8 border-b border-line py-12 md:grid-cols-4 md:py-16">
            {site.stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 80} className="text-center">
                <p className="text-[36px] font-semibold tracking-[-0.03em] text-ink md:text-[48px]">{s.value}</p>
                <p className="mt-1 text-[15px] text-muted">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <TrustedBy />

      {/* SERVICES */}
      <Section tone="grey" labelledBy="services-title" className="mt-0">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="services-title"
              eyebrow="Services"
              title="What we fix."
              lede="Three things, done properly. Whatever the problem, start with a message."
            />
            <Reveal>
              <TextLink href="/services">All services</TextLink>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
            {site.services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 100}>
                <Link
                  href={`/services#${s.slug}`}
                  className="zoom-img group flex h-full flex-col overflow-hidden rounded-[24px] bg-white transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-ink">{s.name}</h3>
                    <p className="mt-2 flex-1 text-[17px] leading-relaxed text-muted">{s.short}</p>
                    <span className="mt-5 text-[17px] font-medium text-brand-ink group-hover:underline group-hover:underline-offset-4">
                      Learn more ›
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="white" labelledBy="why-title">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-20">
            <SectionHeading
              id="why-title"
              eyebrow="Why choose us"
              title="Local. Fast. Reliable."
              lede="You want the leak gone and the job done right. That’s what we’re here for."
            />
            <ul className="space-y-4">
              {site.reasons.map((r, i) => {
                const Icon = reasonIcons[i] ?? ShieldCheck;
                return (
                  <Reveal as="li" key={r.title} delay={i * 100} className="flex gap-5 rounded-[24px] bg-surface-2 p-6 md:p-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-ink">{r.title}</h3>
                      <p className="mt-1.5 text-[17px] leading-relaxed text-muted">{r.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>

      {/* GALLERY */}
      <Section tone="night" labelledBy="work-title">
        <Container>
          <SectionHeading
            id="work-title"
            eyebrow="Our work"
            title="Clean work. No mess left behind."
            lede="Pipes, taps, toilets and everything in between."
            dark
          />
          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:mt-16 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
            {site.gallery.map((g, i) => {
              const span = i === 0 ? "col-span-2 row-span-2" : "col-span-1";
              return (
                <Reveal key={g.src} delay={(i % 3) * 80} className={`zoom-img relative overflow-hidden rounded-[20px] ${span}`}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                    className="object-cover"
                  />
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* WHO WE HELP */}
      <Section tone="white" labelledBy="who-title">
        <Container>
          <SectionHeading
            id="who-title"
            eyebrow="Who we help"
            title="Any plumbing problem. Anyone."
            center
          />
          <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
            {site.audiences.map((a, i) => {
              const Icon = audienceIcons[i] ?? House;
              return (
                <Reveal as="li" key={a.title} delay={i * 100} className="rounded-[24px] border border-line p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-ink">
                    <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em] text-ink">{a.title}</h3>
                  <p className="mx-auto mt-2 max-w-[30ch] text-[17px] leading-relaxed text-muted">{a.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* REVIEWS: only shown once real reviews are added in content/site.ts */}
      {site.reviews.length > 0 && (
        <Section tone="grey" labelledBy="reviews-title">
          <Container>
            <SectionHeading id="reviews-title" eyebrow="Reviews" title="What our clients say." />
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {site.reviews.map((r, i) => (
                <Reveal as="li" key={r.name + i} delay={i * 100} className="rounded-[24px] bg-white p-8">
                  <Quote className="h-7 w-7 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  <blockquote className="mt-4 text-[17px] leading-relaxed text-ink">{r.text}</blockquote>
                  <p className="mt-5 text-[15px] font-medium text-muted">{r.name}</p>
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="grey" labelledBy="faq-title">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Good questions." />
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </Container>
      </Section>

      <div className="bg-surface pt-3 md:pt-4" />
      <CtaSection />
    </>
  );
}
