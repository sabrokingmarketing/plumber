import type { Metadata } from "next";
import Image from "next/image";
import { Zap, MapPin, ShieldCheck } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us | Local Krugersdorp Plumbers",
  description:
    "Plumber Near Me is a local plumbing service from Krugersdorp with 200 happy clients, helping homes, schools and businesses across South Africa.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Plumber Near Me" },
};

const icons = [Zap, MapPin, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface pt-16 md:pt-28" aria-labelledby="about-title">
        <Container>
          <Reveal className="max-w-[860px]">
            <p className="text-[15px] font-medium text-brand-ink">About us</p>
            <h1 id="about-title" className="headline mt-3 text-[40px] sm:text-[56px] md:text-[80px]">
              Your local plumbers from Krugersdorp.
            </h1>
            <p className="lede mt-6 max-w-[58ch] text-[19px] leading-relaxed text-muted md:text-[21px]">
              Plumber Near Me is a local plumbing service. We fix leaks, pipes and toilets for homes, schools and
              business owners, and we help clients across South Africa.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-12 md:mt-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] md:aspect-[16/7]">
              <Image
                src="/images/work-1.jpg"
                alt="Neatly installed water pipes, valves and gauges"
                fill
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <Section tone="white" labelledBy="story-title">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-20">
            <SectionHeading id="story-title" title="Simple promise. Done right." />
            <Reveal className="space-y-5 text-[17px] leading-relaxed text-muted md:text-[19px]">
              <p>
                When water is where it shouldn’t be, you need someone who answers the phone, turns up and fixes it. That’s
                the plumber we set out to be.
              </p>
              <p>
                In just over a year we’ve helped 200 happy clients, from homeowners with a dripping tap to schools and
                businesses that need their bathrooms working every day.
              </p>
              <p>
                {/* TODO: add the owner’s name, a team photo and your own story here. */}
                Being local matters to us. You deal with real people from Krugersdorp who care about doing a good job.
              </p>
            </Reveal>
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4">
            {site.stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 80} className="rounded-[24px] bg-surface-2 p-6 md:p-8">
                <p className="text-[32px] font-semibold tracking-[-0.03em] text-ink md:text-[40px]">{s.value}</p>
                <p className="mt-1 text-[15px] text-muted">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="grey" labelledBy="values-title">
        <Container>
          <SectionHeading id="values-title" eyebrow="Why clients choose us" title="Three reasons." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {site.reasons.map((r, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <Reveal as="li" key={r.title} delay={i * 100} className="rounded-[24px] bg-white p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-ink">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em] text-ink">{r.title}</h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-muted">{r.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <div className="bg-surface pt-3 md:pt-4" />
      <CtaSection />
    </>
  );
}
