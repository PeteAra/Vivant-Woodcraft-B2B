import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categoryLabel,
  getPublishedProject,
  publishedImages,
  publishedProjects,
} from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  if (!project) notFound();

  const images = publishedImages(project);
  const [cover, ...rest] = images;
  if (!cover) notFound();

  return (
    <>
      <PageHero
        eyebrow={categoryLabel(project.category)}
        title={project.title}
        lede={project.summary}
        image={cover.src}
        alt={cover.alt}
      />
      <Container className="py-16 md:py-20">
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.description}</p>
      </Container>
      <div className="flex flex-col gap-12 pb-8 md:gap-16">
        {rest.map((image) => (
          <figure key={image.src} className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <Frame
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 76vw, 100vw"
              portraitClassName="mx-auto w-full max-w-2xl"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
              {categoryLabel(image.category)}
            </figcaption>
          </figure>
        ))}
      </div>
      <Container className="flex flex-col items-start gap-6 pb-24 pt-8">
        <p className="font-display text-3xl text-ink">Discuss a similar scope.</p>
        <Button href="/contact">Contact Rodney</Button>
      </Container>
    </>
  );
}
