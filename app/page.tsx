import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { BuilderPartnership } from "@/components/home/BuilderPartnership";
import { CapabilitiesPreview } from "@/components/home/CapabilitiesPreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { WhyVivant } from "@/components/home/WhyVivant";

export const metadata: Metadata = {
  title: {
    absolute: "Vivant Custom Woodcraft | Custom Cabinetry and Millwork for Builders",
  },
  description:
    "Custom cabinetry and architectural millwork for custom home builders, general contractors, and remodeling companies. Based in Credit River, Minnesota.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <CapabilitiesPreview />
      <FeaturedWork />
      <WhyVivant />
      <BuilderPartnership />
      <ClosingCta />
    </>
  );
}
