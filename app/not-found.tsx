import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink text-bg-elevated">
      <Container className="py-32">
        <p className="text-xs uppercase tracking-[0.22em] text-wood">404</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">This page is not on the site.</h1>
        <p className="mt-5 max-w-md text-bg-elevated/75">
          The work, the capabilities, and Rodney’s phone number are still a page away.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="light">
            Back to the homepage
          </Button>
          <Button href="/portfolio" variant="outlineLight">
            Explore Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
