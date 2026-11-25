import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { Frame } from "@/components/ui/Frame";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Custom kitchens, bathroom vanities, built-ins, specialty cabinetry, architectural millwork, and related woodwork for residential builders.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Cabinetry and millwork for residential construction."
        lede="A look at the kinds of work Vivant builds for builders and remodeling companies."
        image="/images/northgate/372.jpg"
        alt="Range wall with white shaker drawers, a stone surround, and a metal hood."
      />
      <Section>
        <div className="flex flex-col gap-20 md:gap-28">
          {capabilities.map((item, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal key={item.slug}>
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                  <div
                    className={
                      reversed
                        ? "lg:col-span-7 lg:col-start-6"
                        : "lg:col-span-7"
                    }
                  >
                    <Frame
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      portraitClassName="w-full max-w-lg"
                    />
                  </div>
                  <div
                    className={
                      reversed
                        ? "lg:col-span-4 lg:col-start-1 lg:row-start-1"
                        : "lg:col-span-4 lg:col-start-9"
                    }
                  >
                    <h2 className="font-display text-3xl text-ink md:text-4xl">{item.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink-muted">{item.summary}</p>
                    <p className="mt-4 leading-relaxed text-ink-muted">{item.description}</p>
                    <Link
                      href={`/portfolio?category=${item.category}`}
                      className="mt-5 inline-block text-sm tracking-wide text-walnut underline-offset-4 hover:underline"
                    >
                      See related work
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <section className="border-t border-border">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-3xl text-ink md:text-4xl">
            Have a scope that fits one of these, or sits between them?
          </p>
          <Button href="/contact">Discuss a Project</Button>
        </Container>
      </section>
    </>
  );
}
