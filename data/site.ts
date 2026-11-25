export const siteConfig = {
  name: "Vivant Custom Woodcraft",
  shortName: "Vivant",
  tagline: "Custom Cabinetry and Millwork for Builders",
  description:
    "Custom cabinetry and architectural millwork for custom home builders, general contractors, and remodeling companies. Based in Credit River, Minnesota.",
  location: {
    city: "Credit River",
    state: "Minnesota",
    regionCode: "MN",
  },
  phone: "612-282-8259",
  phoneHref: "tel:+16122828259",
  phoneSchema: "+1-612-282-8259",
  owner: "Rodney Vivant",
  /**
   * Set NEXT_PUBLIC_SITE_URL when a domain is confirmed.
   * Kept null so canonical URLs are not invented.
   */
  siteUrl: null as string | null,
  /** Prior-site recognition. Hidden until Rodney wants it on the page. */
  showRecognition: false,
  recognition: [
    {
      year: "2002",
      title: "Trillium Award — Best Cabinetry",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: "2003",
      title: "Trillium Award — Best Cabinetry",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: "2004",
      title: "Trillium Award — Best Bath",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: "2005",
      title: "Trillium Award — Best Bath",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: null,
      title: "Partners in Excellence",
      org: "On The Level — outstanding workmanship, service & integrity",
    },
  ],
  nav: [
    { label: "Work", href: "/portfolio" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl || null;
}

export const projectTypes = [
  { value: "kitchen", label: "Kitchen cabinetry" },
  { value: "bathroom", label: "Bathroom vanity" },
  { value: "built-ins", label: "Built-ins and storage" },
  { value: "specialty", label: "Specialty cabinetry" },
  { value: "millwork", label: "Architectural millwork" },
  { value: "multiple", label: "Several of these" },
  { value: "other", label: "Something else" },
] as const;

export type ProjectType = (typeof projectTypes)[number]["value"];
