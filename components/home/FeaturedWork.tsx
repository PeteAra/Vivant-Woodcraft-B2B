import Link from "next/link";
import { categoryLabel, homepageFeatured } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedWork() {
  const frames = homepageFeatured();
  const [lead, second, third, last] = frames;

  if (!lead || !second || !third || !last) return null;

  return (
    <Section className="bg-bg-elevated/70">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Featured work</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Northgate</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
            Cabinetry and woodwork from one residence. The full set is in the
            portfolio.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10 md:gap-14">
        <Reveal>
          <FeatureFrame item={lead} priority />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <Reveal>
            <FeatureFrame item={second} />
          </Reveal>
          <Reveal delay={0.08}>
            <FeatureFrame item={third} />
          </Reveal>
        </div>
        <Reveal>
          <FeatureFrame item={last} />
        </Reveal>
      </div>

      <div className="mt-12">
        <Button href="/portfolio" variant="secondary">
          Explore Our Work
        </Button>
      </div>
    </Section>
  );
}

function FeatureFrame({
  item,
  priority = false,
}: {
  item: ReturnType<typeof homepageFeatured>[number];
  priority?: boolean;
}) {
  return (
    <figure>
      <Link
        href={`/portfolio/${item.project.slug}`}
        aria-label={`${item.project.title}, ${categoryLabel(item.image.category)}`}
        className="group block"
      >
        <Frame
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          sizes="(min-width: 1024px) 70vw, 100vw"
          priority={priority}
        />
      </Link>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-display text-2xl text-ink">{item.project.title}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
          {categoryLabel(item.image.category)}
        </span>
      </figcaption>
    </figure>
  );
}
