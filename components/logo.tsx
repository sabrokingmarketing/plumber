import Link from "next/link";
import { site } from "@/content/site";

/** Brand mark: a water drop shaped like a map pin ("near me"). TODO: swap for the real logo when supplied. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#FF6A00" />
      <path
        d="M20 8.5c-.4 0-.7.2-1 .5C15.6 13 11.5 18.4 11.5 22.8a8.5 8.5 0 0 0 17 0C28.5 18.4 24.4 13 21 9c-.3-.3-.6-.5-1-.5Z"
        fill="#111111"
      />
      <circle cx="20" cy="22.8" r="3.2" fill="#FF6A00" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex min-h-11 items-center gap-2.5 rounded-lg"
      aria-label={`${site.name} home`}
    >
      <LogoMark />
      <span className={`text-[17px] leading-none tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        <span className="font-semibold">Plumber</span>{" "}
        <span className={`font-normal ${dark ? "text-night-muted" : "text-muted"}`}>Near Me</span>
      </span>
    </Link>
  );
}
