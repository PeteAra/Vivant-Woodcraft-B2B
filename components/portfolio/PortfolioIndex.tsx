"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  categories,
  categoryLabel,
  coverImage,
  isCategory,
  projectMatchesCategory,
  type Category,
  type Project,
} from "@/data/projects";
import { Frame } from "@/components/ui/Frame";
import { Container } from "@/components/ui/Section";

export function PortfolioIndex({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const category: Category | "all" = isCategory(requested) ? requested : "all";

  const visible = useMemo(
    () => projects.filter((project) => projectMatchesCategory(project, category)),
    [projects, category],
  );

  function select(next: Category | "all") {
    const href = next === "all" ? "/portfolio" : `/portfolio?category=${next}`;
    router.replace(href, { scroll: false });
  }

  return (
    <Container className="pb-24">
      <div
        className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-5"
        role="group"
        aria-label="Filter projects"
      >
        <FilterButton active={category === "all"} onClick={() => select("all")}>
          All
        </FilterButton>
        {categories.map((item) => (
          <FilterButton
            key={item.id}
            active={category === item.id}
            onClick={() => select(item.id)}
          >
            {item.label}
          </FilterButton>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-20">
        {visible.length === 0 ? (
          <p className="text-ink-muted">No published projects in this category yet.</p>
        ) : (
          visible.map((project) => {
            const image = coverImage(project, category);
            if (!image) return null;
            return (
              <article key={project.slug}>
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <Frame
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 76vw, 100vw"
                  />
                  <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <h2 className="font-display text-4xl text-ink md:text-5xl">
                        {project.title}
                      </h2>
                      <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">
                        {project.summary}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                      {category === "all"
                        ? categoryLabel(project.category)
                        : categoryLabel(category)}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })
        )}
      </div>
    </Container>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`pb-1 text-sm tracking-wide transition-colors ${
        active
          ? "border-b border-ink text-ink"
          : "border-b border-transparent text-ink-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
