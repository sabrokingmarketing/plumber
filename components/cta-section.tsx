import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Container } from "./ui";
import { Reveal } from "./reveal";
import { whatsappLink, phoneLink, site } from "@/content/site";

/** The closing call to action used at the bottom of every page. */
export function CtaSection({
  title = "Got a leak? Let’s fix it.",
  text = "Send us a WhatsApp with a photo of the problem, or give us a call. A local plumber will get back to you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-surface px-3 pb-3 md:px-4 md:pb-4">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-night">
        <Image
          src="/images/cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-right opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/80 to-night/10" aria-hidden="true" />
        <Container className="py-20 md:py-32">
          <Reveal className="max-w-[640px]">
            <h2 id="cta-title" className="headline text-[40px] text-white sm:text-[52px] md:text-[72px]">
              {title}
            </h2>
            <p className="lede mt-5 max-w-[50ch] text-[17px] leading-relaxed text-night-muted md:text-[19px]">{text}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-[17px] font-medium text-ink transition-colors hover:bg-brand-hover"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                WhatsApp us
              </a>
              <a
                href={phoneLink}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-[17px] font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                Call {site.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
