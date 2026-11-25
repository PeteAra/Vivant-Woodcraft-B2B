import type { Metadata } from "next";
import { craftDetail } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rodney Vivant and Vivant Custom Woodcraft, a custom cabinetry and millwork company in Credit River, Minnesota, working with residential builders.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Craft, and a direct working relationship."
        image="/images/northgate/290.jpg"
        alt="Wood barn doors and a passage door in a bedroom."
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              {siteConfig.owner}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {siteConfig.owner} leads {siteConfig.name} from{" "}
              {siteConfig.location.city}, {siteConfig.location.state}. The company
              builds custom cabinetry and architectural millwork for residential
              construction, and works with builders who care how the finished
              rooms look.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The standard is straightforward: fit, material, and follow-through.
              Cabinetry and woodwork should belong to the house, and the
              relationship with the builder should be easy to pick up the phone
              about.
            </p>
            <div className="mt-8">
              <Button href="/contact">Contact Rodney</Button>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.08}>
            {craftDetail.published ? (
              <Frame
                src={craftDetail.src}
                alt={craftDetail.alt}
                width={craftDetail.width}
                height={craftDetail.height}
                sizes="(min-width: 1024px) 36vw, 100vw"
                portraitClassName="w-full"
              />
            ) : null}
            {siteConfig.showRecognition ? (
              <div className={craftDetail.published ? "mt-12" : ""}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-accent">Recognition</h2>
                <ul className="mt-6">
                  {siteConfig.recognition.map((award) => (
                    <li
                      key={`${award.year}-${award.title}`}
                      className="border-b border-border py-4"
                    >
                      <p className="font-display text-2xl text-ink">
                        {award.year ? `${award.year} — ` : ""}
                        {award.title}
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">{award.org}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
