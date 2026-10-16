import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { CtaSection } from "@/components/cta-section";
import { site, emailLink, phoneLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy (POPIA)",
  description: "How Plumber Near Me collects, uses and protects your personal information under South Africa’s POPI Act.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy", title: "Privacy Policy | Plumber Near Me" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-surface pt-16 pb-16 md:pt-28 md:pb-28">
        <Container>
          <article className="mx-auto max-w-[720px]">
            <p className="text-[15px] font-medium text-brand-ink">Legal</p>
            <h1 className="headline mt-3 text-[40px] md:text-[64px]">Privacy Policy</h1>
            <p className="mt-4 text-[15px] text-muted">
              {/* TODO: update this date whenever the policy changes */}
              Last updated: 16 October 2026
            </p>

            <div className="mt-10 space-y-8 text-[17px] leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_a]:font-medium [&_a]:text-brand-ink [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              <section>
                <h2>Who we are</h2>
                <p>
                  {site.name} is a plumbing service based in {site.contact.town}, South Africa. We respect your privacy and
                  handle your personal information in line with the Protection of Personal Information Act, 2013 (POPIA).
                </p>
              </section>

              <section>
                <h2>What we collect</h2>
                <p>We only collect what you choose to share with us when you contact us, such as:</p>
                <ul>
                  <li>your name, phone number and email address</li>
                  <li>the address where the plumbing work is needed</li>
                  <li>details, photos or videos of the problem you send us</li>
                </ul>
                <p className="mt-3">
                  This website has no contact forms, logins or user accounts. Our hosting provider may keep basic technical
                  logs (like your IP address and browser type) to keep the site secure and working.
                </p>
              </section>

              <section>
                <h2>How we use it</h2>
                <ul>
                  <li>to reply to you and give you a quote</li>
                  <li>to book, do and follow up on the plumbing work</li>
                  <li>to send invoices and keep the records the law requires</li>
                </ul>
                <p className="mt-3">We don’t sell your information, and we won’t send you marketing without your consent.</p>
              </section>

              <section>
                <h2>Sharing</h2>
                <p>
                  We only share your information when we need to do the job (for example with a supplier delivering parts to
                  your site), when the law requires it, or with your permission. When you message us on WhatsApp or by email,
                  those services also process your messages under their own privacy policies.
                </p>
              </section>

              <section>
                <h2>Keeping it safe</h2>
                <p>
                  We take reasonable steps to protect your information from loss, misuse and unauthorised access, and we keep
                  it only for as long as we need it or as long as the law requires.
                </p>
              </section>

              <section>
                <h2>Your rights under POPIA</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>ask what personal information we hold about you</li>
                  <li>ask us to correct or delete your information</li>
                  <li>object to us using your information</li>
                  <li>
                    complain to the Information Regulator of South Africa (
                    <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">
                      inforegulator.org.za
                    </a>
                    )
                  </li>
                </ul>
              </section>

              <section>
                <h2>Contact us</h2>
                <p>
                  For any privacy question or request, email <a href={emailLink}>{site.contact.email}</a> or call{" "}
                  <a href={phoneLink}>{site.contact.phoneDisplay}</a>.
                </p>
              </section>
            </div>
          </article>
        </Container>
      </section>
      <CtaSection title="Need a plumber?" />
    </>
  );
}
