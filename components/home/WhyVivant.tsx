import { Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Custom craftsmanship",
    body: "Cabinets and millwork are built for the specific house, including custom sizes, profiles, and one-off pieces.",
  },
  {
    title: "Architectural detail",
    body: "Proportions, profiles, and finishes are worked so the cabinetry sits with the rest of the interior.",
  },
  {
    title: "Collaborative execution",
    body: "Rodney coordinates the cabinetry scope directly with the builder, so questions stay with the person doing the work.",
  },
  {
    title: "Materials and finishes",
    body: "Painted, stained, and natural wood finishes, specified for the room. Hardware and edge details are part of the same conversation.",
  },
];

export function WhyVivant() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Why work with Vivant</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-ink md:text-5xl">
            Woodwork that can stand next to the rest of the house.
          </h2>
        </Reveal>
        <ol className="lg:col-span-6 lg:col-start-7">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.05}>
              <li className="border-t border-border py-7">
                <p className="text-xs tracking-[0.18em] text-accent">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-muted">{reason.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
