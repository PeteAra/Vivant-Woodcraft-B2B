import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function BuilderPartnership() {
  return (
    <section className="bg-walnut text-bg-elevated">
      <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-wood">
            Working with builders
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight md:text-5xl">
            A cabinetry partner for the houses on your list.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bg-elevated/80">
            Vivant welcomes conversations with builders and contractors who want
            a shop for custom cabinetry and millwork. Bring an upcoming house, a
            remodel, or a question about how a scope might be built.
          </p>
        </Reveal>
        <Reveal className="flex flex-col items-start gap-5 lg:col-span-4 lg:col-start-9" delay={0.08}>
          <Button href="/contact" variant="light">
            Become a Builder Partner
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="text-sm tracking-wide text-bg-elevated/80 underline-offset-4 hover:text-bg-elevated hover:underline"
          >
            Call {siteConfig.owner.split(" ")[0]} · {siteConfig.phone}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
