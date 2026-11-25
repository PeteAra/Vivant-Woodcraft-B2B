import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end">
      <Image
        src="/images/northgate/362.jpg"
        alt="Wide view of a kitchen with white perimeter cabinets, a stained island, and a stone cooking wall."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/25" />
      <Container className="relative z-10 pb-16 pt-32 md:pb-20">
        <p className="text-xs uppercase tracking-[0.22em] text-[#f3e6d4]">
          {siteConfig.location.city}, {siteConfig.location.state}
        </p>
        <h1 className="mt-4 max-w-4xl text-balance font-display text-5xl leading-[0.95] text-bg-elevated md:text-7xl">
          Custom cabinetry for the homes you build.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-bg-elevated/85">
          Vivant Custom Woodcraft works with custom home builders, general
          contractors, and remodeling companies. Kitchens, baths, built-ins, and
          architectural woodwork, made for the house at hand.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="light">
            Discuss a Project
          </Button>
          <Button href="/portfolio" variant="outlineLight">
            Explore Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
