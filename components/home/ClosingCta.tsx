import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl text-ink md:text-6xl">
          Discuss the next project with Rodney.
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
          Call about the house, the rooms involved, and the timing you are
          working toward. {siteConfig.location.city}, {siteConfig.location.state}.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="mt-8 block font-display text-4xl text-ink hover:text-walnut md:text-5xl"
        >
          {siteConfig.phone}
        </a>
        <div className="mt-8">
          <Button href="/contact">Discuss a Project</Button>
        </div>
      </Reveal>
    </Section>
  );
}
