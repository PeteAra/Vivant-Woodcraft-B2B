"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const overlay = pathname !== "/contact";
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const solid = !overlay || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const brand = solid ? "text-ink" : "text-bg-elevated";
  const link = solid
    ? "text-ink-muted hover:text-ink"
    : "text-bg-elevated/80 hover:text-bg-elevated";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-border bg-bg/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-8">
        <Link href="/" className={`leading-none ${brand}`} onClick={() => setOpenPath(null)}>
          <span className="block font-display text-[1.7rem] tracking-tight">
            {siteConfig.shortName}
          </span>
          <span
            className={`mt-1 block text-[0.62rem] uppercase tracking-[0.22em] ${
              solid ? "text-ink-muted" : "text-bg-elevated/75"
            }`}
          >
            Custom Woodcraft
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/portfolio"
                ? pathname.startsWith("/portfolio")
                : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors ${link} ${
                  active ? "underline decoration-wood/80 underline-offset-8" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            href="/contact"
            variant={solid ? "primary" : "light"}
            className="!px-5 !py-2.5 text-xs uppercase tracking-[0.16em]"
          >
            Discuss a Project
          </Button>
        </nav>

        <button
          type="button"
          className={`text-sm tracking-[0.14em] uppercase lg:hidden ${brand}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="min-h-[calc(100svh-4rem)] border-t border-border bg-bg px-6 pb-10 pt-6 lg:hidden md:min-h-[calc(100svh-5rem)]"
        >
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 font-display text-4xl text-ink"
                onClick={() => setOpenPath(null)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-6 self-start">
              Discuss a Project
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
