import { siteConfig } from "@/data/site";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow>The company</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            A cabinetry partner for the build.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
          <p className="text-lg leading-relaxed text-ink-muted">
            Vivant Custom Woodcraft is a custom cabinetry and millwork company
            in {siteConfig.location.city}, {siteConfig.location.state}.{" "}
            {siteConfig.owner} works with residential builders and contractors
            who need the woodwork to match the standard of the house.
          </p>
          <p className="mt-5 leading-relaxed text-ink-muted">
            The work is fitted to the architecture of each project: painted and
            stained kitchens, bath vanities, built-in storage, bars, doors, and
            related woodwork. The aim is a finished room that looks considered,
            and a working relationship that stays direct.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
