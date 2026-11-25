import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Eyebrow, Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call Rodney Vivant at 612-282-8259 in Credit River, Minnesota, to discuss cabinetry and millwork for a residential project.",
};

export default function ContactPage() {
  return (
    <Section className="pt-32 md:pt-36">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink md:text-6xl">
            Talk with Rodney about a project or a partnership.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Builders and contractors are welcome to call about upcoming houses,
            remodels, and cabinetry scopes.
          </p>
          <dl className="mt-10 space-y-6 text-ink">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">Phone</dt>
              <dd className="mt-2 font-display text-3xl">
                <a href={siteConfig.phoneHref} className="hover:text-walnut">
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">Location</dt>
              <dd className="mt-2 text-lg">
                {siteConfig.location.city}, {siteConfig.location.state}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">Ask for</dt>
              <dd className="mt-2 text-lg">{siteConfig.owner}</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
