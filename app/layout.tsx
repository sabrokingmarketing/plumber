import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site, siteUrl } from "@/content/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plumber in Krugersdorp | Plumbing, Piping & Toilets | Plumber Near Me",
    template: "%s | Plumber Near Me",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    title: "Plumber Near Me | Local plumber in Krugersdorp",
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// LocalBusiness details for Google. Only real details from the brief.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg`,
  telephone: site.contact.phoneLink,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Krugersdorp",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
    ...(site.contact.address ? { streetAddress: site.contact.address } : {}),
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing services",
    itemListElement: site.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.short },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Turns on scroll animations only when JavaScript runs, so content is never hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
