import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Caps portrait frames so a full-bleed column does not become a tall crop. */
  portraitClassName?: string;
};

export function Frame({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  portraitClassName = "mx-auto w-full max-w-xl",
}: FrameProps) {
  const portrait = height > width;

  return (
    <div className={`${portrait ? portraitClassName : "w-full"} ${className}`}>
      <div
        className="relative bg-stone/15"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
