import Image from "next/image";
import { site } from "@/content/site";

/** Endless logo loop. Only shows when client logos are listed in content/site.ts. */
export function TrustedBy() {
  const logos = site.clientLogos;
  if (logos.length === 0) return null;

  const row = (duplicate: boolean) => (
    <ul
      className={`flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24 ${duplicate ? "marquee-duplicate" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {logos.map((logo) => (
        <li key={logo.file} className="shrink-0">
          <Image
            src={logo.file}
            alt={duplicate ? "" : logo.name}
            width={160}
            height={40}
            className="h-9 w-auto object-contain opacity-70 grayscale md:h-10"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Trusted by" className="overflow-hidden bg-surface py-10 md:py-14">
      <div className="marquee-track flex">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
