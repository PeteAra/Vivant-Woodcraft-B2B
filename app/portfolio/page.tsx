import type { Metadata } from "next";
import { Suspense } from "react";
import { publishedProjects } from "@/data/projects";
import { PortfolioIndex } from "@/components/portfolio/PortfolioIndex";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Photography of custom cabinetry and millwork by Vivant Custom Woodcraft, for builders reviewing completed residential work.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Completed cabinetry and millwork."
        lede="Kitchens, baths, built-ins, bars, and millwork from completed residential work."
        image="/images/northgate/354.jpg"
        alt="Kitchen island and white cabinetry beside a bank of windows."
      />
      <div className="pt-10">
        <Suspense fallback={<p className="px-6 py-16 text-ink-muted">Loading work…</p>}>
          <PortfolioIndex projects={publishedProjects} />
        </Suspense>
      </div>
    </>
  );
}
