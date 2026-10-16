import { Plus } from "lucide-react";
import { site } from "@/content/site";

/** FAQ built on native details/summary: works without JavaScript and with keyboards. */
export function Faq() {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {site.faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[18px] font-medium text-ink md:text-[20px] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-open:rotate-45">
              <Plus className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-[62ch] pb-6 text-[17px] leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
