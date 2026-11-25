import Image from "next/image";
import { Container } from "@/components/ui/Section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  alt: string;
};

export function PageHero({ eyebrow, title, lede, image, alt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[68vh] items-end">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/25" />
      <Container className="relative z-10 pb-14 pt-32">
        <p className="text-xs uppercase tracking-[0.22em] text-[#f3e6d4]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl text-bg-elevated md:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bg-elevated/85">
            {lede}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
