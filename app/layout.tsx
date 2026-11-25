import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { getSiteUrl, siteConfig } from "@/data/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "en_US",
    type: "website",
    siteName: siteConfig.name,
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [
      {
        url: "/images/northgate/362.jpg",
        width: 1800,
        height: 1200,
        alt: "Kitchen with white perimeter cabinets and a stained island, built for a residence.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phoneSchema,
    image: siteUrl ? `${siteUrl}/images/northgate/362.jpg` : undefined,
    url: siteUrl ?? undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.regionCode,
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
