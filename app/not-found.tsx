import { Container, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <Container className="text-center">
        <p className="text-[15px] font-medium text-brand-ink">404</p>
        <h1 className="headline mt-3 text-[44px] md:text-[72px]">This page sprang a leak.</h1>
        <p className="mx-auto mt-5 max-w-[40ch] text-[19px] text-muted">The page you’re looking for doesn’t exist.</p>
        <div className="mt-9">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
