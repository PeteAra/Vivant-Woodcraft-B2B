import Link from "next/link";
import { homeCapabilities } from "@/data/capabilities";
import { Frame } from "@/components/ui/Frame";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function CapabilitiesPreview() {
  return (
    <Section className="pt-0">
      <Reveal>
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl text-ink md:text-5xl">
          The work a builder can bring to the shop.
        </h2>
      </Reveal>
      <div className="mt-14 flex flex-col gap-16 md:gap-24">
        {homeCapabilities.map((item, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={item.slug}>
              <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className={reversed ? "lg:col-span-7 lg:col-start-6 lg:row-start-1" : "lg:col-span-7"}>
                  <Link
                    href={`/portfolio?category=${item.category}`}
                    aria-label={item.title}
                    className="group block"
                  >
                    <Frame
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      portraitClassName="w-full max-w-md"
                    />
                  </Link>
                </div>
                <div className={reversed ? "lg:col-span-4 lg:col-start-1 lg:row-start-1" : "lg:col-span-4 lg:col-start-9"}>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">{item.summary}</p>
                  <Link
                    href="/capabilities"
                    className="mt-5 inline-block text-sm tracking-wide text-walnut underline-offset-4 hover:underline"
                  >
                    View our capabilities
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
