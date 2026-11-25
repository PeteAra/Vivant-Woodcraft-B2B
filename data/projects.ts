/**
 * Portfolio content.
 * Set `published` on a project or a single photo to show or hide it.
 * Reorder `images` to change the gallery sequence.
 * Paths point at copies in public/images. Originals stay in vivant_woodcraft_photos/.
 */

export const categories = [
  { id: "kitchen", label: "Kitchens" },
  { id: "bathroom", label: "Baths" },
  { id: "built-ins", label: "Built-ins" },
  { id: "specialty", label: "Specialty" },
  { id: "millwork", label: "Millwork" },
] as const;

export type Category = (typeof categories)[number]["id"];

export type GalleryImage = {
  src: string;
  alt: string;
  category: Category;
  width: number;
  height: number;
  published: boolean;
  featured?: boolean;
  /** Original filename, so a later reorder can be matched to the photo folder. */
  source: string;
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  description: string;
  published: boolean;
  images: GalleryImage[];
};

function photo(
  src: string,
  source: string,
  alt: string,
  category: Category,
  width: number,
  height: number,
  extra?: { published?: boolean; featured?: boolean },
): GalleryImage {
  return {
    src,
    source,
    alt,
    category,
    width,
    height,
    published: extra?.published ?? true,
    featured: extra?.featured ?? false,
  };
}

export const projects: Project[] = [
  {
    slug: "northgate",
    title: "Northgate",
    category: "kitchen",
    summary:
      "Kitchen, bath, storage, bar, and interior woodwork for one residence.",
    description:
      "Cabinetry and woodwork photographed throughout a residence: a painted kitchen with a stained island, pantry and laundry storage, several bathroom vanities, a walk-in closet, a wet bar, and interior wood doors. Stone, beams, and furnishings in these rooms are part of the finished house.",
    published: true,
    images: [
      photo(
        "/images/northgate/362.jpg",
        "221010_12371 Northgate_362.jpg",
        "Wide view of a kitchen with white perimeter cabinets, a stained island, and a stone cooking wall.",
        "kitchen",
        1800,
        1200,
        { featured: true },
      ),
      photo(
        "/images/northgate/354.jpg",
        "221010_12371 Northgate_354.jpg",
        "Kitchen island and white cabinetry beside a bank of windows.",
        "kitchen",
        1800,
        1199,
        { featured: true },
      ),
      photo(
        "/images/northgate/372.jpg",
        "221010_12371 Northgate_372.jpg",
        "Range wall with white shaker drawers, a stone surround, and a metal hood.",
        "kitchen",
        1800,
        2700,
      ),
      photo(
        "/images/northgate/095.jpg",
        "221010_12371 Northgate_095.jpg",
        "Butler's pantry with white base cabinets, glass-front uppers, and open shelves.",
        "kitchen",
        1800,
        2864,
      ),
      photo(
        "/images/northgate/160.jpg",
        "221010_12371 Northgate_160.jpg",
        "Primary bathroom with a long white vanity, linen cabinets, and a makeup desk.",
        "bathroom",
        1800,
        1200,
        { featured: true },
      ),
      photo(
        "/images/northgate/248.jpg",
        "221010_12371 Northgate_248.jpg",
        "Stained wood double vanity with a tall center cabinet between two mirrors.",
        "bathroom",
        1800,
        1213,
      ),
      photo(
        "/images/northgate/429.jpg",
        "221010_12371 Northgate_429.jpg",
        "Wood vanity with open towel shelves and a trough sink.",
        "bathroom",
        1800,
        2700,
      ),
      photo(
        "/images/northgate/213.jpg",
        "221010_12371 Northgate_213.jpg",
        "Powder room with a white vanity, a dark display cabinet, and a second sink beyond.",
        "bathroom",
        1800,
        3033,
      ),
      photo(
        "/images/northgate/210.jpg",
        "221010_12371 Northgate_210.jpg",
        "Bathroom with a freestanding tub, a glass shower, and the edge of a white vanity.",
        "bathroom",
        1800,
        1200,
      ),
      photo(
        "/images/northgate/315.jpg",
        "221010_12371 Northgate_315.jpg",
        "Bathroom vanity in a red-stained finish, with wood paneling beside the shower.",
        "bathroom",
        1800,
        1212,
      ),
      photo(
        "/images/northgate/176.jpg",
        "221010_12371 Northgate_176.jpg",
        "Walk-in closet with open hanging, drawers, and wood upper cabinets.",
        "built-ins",
        1800,
        1200,
        { featured: true },
      ),
      photo(
        "/images/northgate/107.jpg",
        "221010_12371 Northgate_107.jpg",
        "Laundry room with blue-gray cabinets, wood counters, and open cubbies.",
        "built-ins",
        1800,
        2700,
      ),
      photo(
        "/images/northgate/279.jpg",
        "221010_12371 Northgate_279.jpg",
        "Built-in bookcase in a stained wood finish, photographed with the room in use.",
        "built-ins",
        1800,
        1200,
      ),
      photo(
        "/images/northgate/088.jpg",
        "221010_12371 Northgate_088.jpg",
        "Black painted bar with glass-front uppers, drawers, and a stone counter.",
        "specialty",
        1800,
        2700,
        { featured: true },
      ),
      photo(
        "/images/northgate/408.jpg",
        "221010_12371 Northgate_408.jpg",
        "Wood wet bar with open display shelves and a glass-door refrigerator cabinet.",
        "specialty",
        1800,
        2407,
      ),
      photo(
        "/images/northgate/403.jpg",
        "221010_12371 Northgate_403.jpg",
        "Wood display cabinet and a bar counter in a lower-level room.",
        "specialty",
        1800,
        2573,
      ),
      photo(
        "/images/northgate/412.jpg",
        "221010_12371 Northgate_412.jpg",
        "Lower-level gathering room. Wood framing and a paneled bar front sit with the table and screen.",
        "specialty",
        1800,
        1200,
      ),
      photo(
        "/images/northgate/558.jpg",
        "221010_12371 Northgate_558.jpg",
        "Lower-level media room. A wood door is visible beside the screen.",
        "specialty",
        1800,
        2472,
      ),
      photo(
        "/images/northgate/290.jpg",
        "221010_12371 Northgate_290.jpg",
        "Wood barn doors and a passage door opening to a dresser alcove.",
        "millwork",
        1800,
        1200,
      ),
      photo(
        "/images/northgate/283.jpg",
        "221010_12371 Northgate_283.jpg",
        "Plank-style wood doors and a dresser in a bedroom.",
        "millwork",
        1800,
        1200,
      ),
    ],
  },
  {
    slug: "reeded-oak-vanity",
    title: "Reeded Oak Vanity",
    category: "bathroom",
    summary: "A reeded oak vanity and tall storage cabinet with a stone top.",
    description:
      "Bathroom cabinetry in oak: a reeded vanity with drawers and doors, and a tall cabinet of the same detail beside the mirror. Photographed in the finished room.",
    published: true,
    images: [
      photo(
        "/images/vanity/6360.jpeg",
        "IMG_6360.jpeg",
        "Reeded oak bathroom vanity with a gray stone top and an undermount sink.",
        "bathroom",
        4032,
        3024,
        { featured: true },
      ),
      photo(
        "/images/vanity/6361.jpeg",
        "IMG_6361.jpeg",
        "Tall reeded oak cabinet beside the vanity, with a sconce and the edge of a mirror.",
        "bathroom",
        4032,
        3024,
      ),
    ],
  },
  {
    slug: "painted-range-wall",
    title: "Painted range wall",
    category: "kitchen",
    summary:
      "Held back. The photograph was taken during installation, with tape and an exposed wire still in the frame.",
    description:
      "Painted cabinetry and a wood range hood, photographed before the counter and backsplash were finished.",
    published: false,
    images: [
      photo(
        "/images/held/0189.jpeg",
        "IMG_0189.jpeg",
        "Painted kitchen cabinets and a range hood during installation, with tape on the counter and a wire hanging at the hood.",
        "kitchen",
        4032,
        3024,
        { published: false },
      ),
    ],
  },
  {
    slug: "dark-painted-kitchen",
    title: "Dark painted kitchen",
    category: "kitchen",
    summary:
      "Held back. Phone photos taken while the kitchen was still a job site.",
    description:
      "Dark painted kitchen cabinets with a light counter. The frames include a photographer's reflection and installation clutter.",
    published: false,
    images: [
      photo(
        "/images/held/6618.jpeg",
        "IMG_6618.jpeg",
        "Dark painted upper and lower cabinets. A photographer is reflected in the backsplash.",
        "kitchen",
        4032,
        3024,
        { published: false },
      ),
      photo(
        "/images/held/6619.jpeg",
        "IMG_6619.jpeg",
        "Additional view of the dark painted kitchen during installation.",
        "kitchen",
        4032,
        3024,
        { published: false },
      ),
      photo(
        "/images/held/6620.jpeg",
        "IMG_6620.jpeg",
        "Dark painted kitchen run with wood shelves. A vacuum and drop cloths are still on the floor.",
        "kitchen",
        4032,
        3024,
        { published: false },
      ),
    ],
  },
];

/** Supporting craft photograph. Not a portfolio project. */
export const craftDetail = {
  src: "/images/details/0252.jpg",
  source: "IMG_0252.JPG",
  alt: "Close view of a stained cabinet face, a raised panel, and dark cup pulls.",
  width: 4032,
  height: 3024,
  published: true,
};

/**
 * Files left in vivant_woodcraft_photos and not copied into the site.
 * Listed so they are not mistaken for missing portfolio images.
 */
export const withheldFiles = [
  {
    file: "extra/IMG_0302.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0304.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0307.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0308.JPG",
    reason: "Unfinished paint at a door joint. Not for the public site.",
  },
  {
    file: "extra/IMG_0311.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0341.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0667.JPG",
    reason: "Raw door-profile sample. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0668.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "extra/IMG_0671.JPG",
    reason: "Shop close-up. Held until it can be reviewed for the public site.",
  },
  {
    file: "IMG_6735.HEIC",
    reason: "HEIC file. The site image pipeline does not serve this format.",
  },
  {
    file: "IMG_0483.JPEG",
    reason: "Existing magenta logo. The site uses a typographic wordmark.",
  },
  {
    file: "_Q8dQjE6-0RlDy-_RV9vZ_6uC7Yv6E-IY44FsBPGQKpvb0wIhWoNcrt1LFpluiPzR3seSktEK_wmEmgh8cOU9DzigjVx0COVnG2f0KHYy8e08F_wFSeiv8zGgfn-hNzGHqMyEMx9c-HLXUTno0ArjVHe4-48opOA-0gxN13B6Vhw7RTdZH7HoFpvIszFbXGE.jpg",
    reason: "Generated library interior. Not a Vivant project.",
  },
  {
    file: "UPMxipDgEAll2Oot-yJkYZdpunFJuOO1pStuFo7wWYafRkr24gcyNAaXOwW46x8awD9XG0uB_F12uAMxrBur6IOjAG6qfJYZOnj147-uou2e5WkI03XE2ZtbuBOMq6WJxgir8Xq7L3Z0yGowZyuEm8wPbsyjvgI95L5qqYLNNJAZCtzcZHD7PYdJP6qFcxOn.jpg",
    reason: "Unreviewed download with a generated-style filename. Not published as Vivant work.",
  },
] as const;

export function categoryLabel(id: Category) {
  return categories.find((category) => category.id === id)?.label ?? id;
}

export function isCategory(value: string | null | undefined): value is Category {
  return categories.some((category) => category.id === value);
}

export function publishedImages(project: Project) {
  return project.images.filter((image) => image.published);
}

export const publishedProjects = projects.filter(
  (project) => project.published && publishedImages(project).length > 0,
);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export function coverImage(project: Project, category?: Category | "all") {
  const images = publishedImages(project);
  if (category && category !== "all") {
    return images.find((image) => image.category === category) ?? images[0];
  }
  return images.find((image) => image.featured) ?? images[0];
}

export function projectMatchesCategory(project: Project, category: Category | "all") {
  if (category === "all") return true;
  return publishedImages(project).some((image) => image.category === category);
}

/** Strongest Northgate frames for the homepage sequence, in display order. */
export const homepageFeaturedIds = ["362.jpg", "160.jpg", "176.jpg", "354.jpg"] as const;

export function homepageFeatured() {
  const northgate = getPublishedProject("northgate");
  if (!northgate) return [];
  return homepageFeaturedIds
    .map((id) => publishedImages(northgate).find((image) => image.src.endsWith(id)))
    .filter((image): image is GalleryImage => Boolean(image))
    .map((image) => ({ project: northgate, image }));
}
