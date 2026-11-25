import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <p className="font-display text-3xl text-ink">{siteConfig.shortName}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
            Custom Woodcraft
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Custom cabinetry and millwork for builders and contractors.{" "}
            {siteConfig.location.city}, {siteConfig.location.state}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-ink-muted">
          <p>{siteConfig.owner}</p>
          <p className="mt-2">
            <a href={siteConfig.phoneHref} className="text-ink hover:text-walnut">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-2">
            {siteConfig.location.city}, {siteConfig.location.state}
          </p>
        </div>
      </Container>
      <Container className="border-t border-border py-5">
        <p className="text-xs tracking-wide text-stone">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
