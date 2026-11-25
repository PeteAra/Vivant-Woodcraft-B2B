import type { Category } from "@/data/projects";

export type Capability = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  category: Category;
  /** Shown in the homepage preview. */
  home: boolean;
};

export const capabilities: Capability[] = [
  {
    slug: "kitchens",
    title: "Custom kitchen cabinetry",
    summary:
      "Kitchens built to the plan of the house: islands, tall storage, pantries, and the cabinet run around the cooking wall.",
    description:
      "Painted and stained work, fitted to the room. Scope is set with the builder for the project at hand.",
    image: "/images/northgate/354.jpg",
    alt: "Kitchen with white perimeter cabinets, a stained island, and a stone cooking wall.",
    width: 1800,
    height: 1199,
    category: "kitchen",
    home: true,
  },
  {
    slug: "vanities",
    title: "Bathroom vanities",
    summary:
      "Vanities and bath storage for primary baths and smaller powder rooms, in paint, stain, and natural wood.",
    description:
      "Drawer banks, linen storage, and furniture-scale pieces proportioned to the bathroom they are going into.",
    image: "/images/northgate/429.jpg",
    alt: "Wood bathroom vanity with open towel shelves and a trough sink.",
    width: 1800,
    height: 2700,
    category: "bathroom",
    home: true,
  },
  {
    slug: "built-ins",
    title: "Built-ins and custom storage",
    summary:
      "Closets, pantries, laundry rooms, and shelving built into the walls of the house.",
    description:
      "Storage that belongs to the interior, fitted to the opening and to the way the room is used.",
    image: "/images/northgate/176.jpg",
    alt: "Walk-in closet with hanging space, drawers, and wood upper cabinets.",
    width: 1800,
    height: 1200,
    category: "built-ins",
    home: true,
  },
  {
    slug: "specialty",
    title: "Specialty cabinetry",
    summary:
      "Bars, display cabinets, and other pieces outside a standard kitchen or bath.",
    description:
      "Entertainment cabinetry is discussed per project. The published photographs show residential bar and display cabinetry.",
    image: "/images/northgate/088.jpg",
    alt: "Black painted bar with glass-front upper cabinets and a stone counter.",
    width: 1800,
    height: 2700,
    category: "specialty",
    home: false,
  },
  {
    slug: "millwork",
    title: "Architectural millwork",
    summary:
      "Interior doors, wood paneling, and related millwork that finishes the rooms around the cabinetry.",
    description:
      "Millwork is coordinated with the cabinetry so the profiles and finishes belong to the same house. The photographs show interior doors and wood paneling from completed work.",
    image: "/images/northgate/290.jpg",
    alt: "Wood barn doors and a passage door in a bedroom.",
    width: 1800,
    height: 1200,
    category: "millwork",
    home: true,
  },
  {
    slug: "woodwork",
    title: "Custom woodwork",
    summary:
      "Related pieces that sit with the cabinetry: stained faces, furniture-scale details, and one-off woodwork for the job.",
    description:
      "When a house needs something that is not a cabinet run or a standard door, it can be talked through with the rest of the scope.",
    image: "/images/details/0252.jpg",
    alt: "Close view of a stained cabinet face, a raised panel, and dark cup pulls.",
    width: 4032,
    height: 3024,
    category: "millwork",
    home: false,
  },
];

export const homeCapabilities = capabilities.filter((item) => item.home);
