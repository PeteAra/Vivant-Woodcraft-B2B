import { type ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bg focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
