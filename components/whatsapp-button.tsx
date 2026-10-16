import { whatsappLink } from "@/content/site";

/** Floating WhatsApp button, bottom right on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 md:right-6 md:bottom-6 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9 3 3.28 8.7 3.28 15.73c0 2.25.6 4.45 1.72 6.38L3.17 29l7.05-1.8a12.75 12.75 0 0 0 5.82 1.42h.01c7.03 0 12.75-5.7 12.75-12.73 0-3.4-1.33-6.6-3.74-9A12.68 12.68 0 0 0 16.04 3Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.18 1.07 1.12-4.07-.25-.42a10.5 10.5 0 0 1-1.62-5.62c0-5.84 4.77-10.58 10.64-10.58 2.84 0 5.5 1.1 7.51 3.1a10.5 10.5 0 0 1 3.11 7.48c0 5.84-4.77 10.58-10.53 10.58Zm5.83-7.92c-.32-.16-1.89-.93-2.18-1.03-.3-.11-.5-.16-.72.16-.21.32-.82 1.03-1.01 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.6 9.6 0 0 1-1.78-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.64 0 1.55 1.14 3.06 1.3 3.27.16.21 2.24 3.4 5.42 4.77.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.89-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
