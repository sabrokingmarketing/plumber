import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>{children}</div>;
}

type Tone = "white" | "grey" | "night";
const toneClass: Record<Tone, string> = {
  white: "bg-surface text-ink-soft",
  grey: "bg-surface-2 text-ink-soft",
  night: "bg-night text-white",
};

export function Section({
  children,
  tone = "white",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 md:py-28 lg:py-32 ${toneClass[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  dark = false,
  center = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-[720px] ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-[15px] font-medium ${dark ? "text-brand" : "text-brand-ink"}`}>{eyebrow}</p>
      )}
      <h2 id={id} className="headline mt-3 text-[36px] sm:text-[44px] md:text-[56px]">
        {title}
      </h2>
      {lede && (
        <p
          className={`lede mt-5 max-w-[60ch] text-[17px] leading-relaxed md:text-[19px] ${
            dark ? "text-night-muted" : "text-muted"
          } ${center ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

export function ButtonLink({
  href,
  children,
  external = false,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "dark" | "light";
  className?: string;
}) {
  const styles = {
    primary: "bg-brand text-ink hover:bg-brand-hover",
    dark: "bg-ink text-white hover:bg-black",
    light: "bg-white text-ink hover:bg-white/90",
  }[variant];
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[17px] font-medium transition-colors ${styles} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  dark = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  external?: boolean;
}) {
  const cls = `group inline-flex min-h-11 items-center gap-0.5 text-[17px] font-medium ${
    dark ? "text-brand hover:text-brand-hover" : "text-brand-ink hover:underline"
  } underline-offset-4`;
  const inner = (
    <>
      {children}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
    </>
  );
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Simple page intro used on inner pages */
export function PageIntro({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <section className="bg-surface pt-16 pb-12 md:pt-28 md:pb-16">
      <Container>
        <Reveal className="max-w-[820px]">
          <p className="text-[15px] font-medium text-brand-ink">{eyebrow}</p>
          <h1 className="headline mt-3 text-[40px] sm:text-[56px] md:text-[80px]">{title}</h1>
          <p className="lede mt-6 max-w-[58ch] text-[19px] leading-relaxed text-muted md:text-[21px]">{lede}</p>
        </Reveal>
      </Container>
    </section>
  );
}
