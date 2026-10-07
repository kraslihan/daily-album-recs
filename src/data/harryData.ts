export type HarryPhoto = {
  id: string;
  image: string;
  era: string;
  year: string;
  label: string;
  tags: string[];
};

/**
 * Demo catalog for the Favorite Harry Styles Era battle.
 * Swap files under /public/harry/ using the same filenames
 * (or update `image` paths) when you add your own photos.
 */
export const harryPhotos: HarryPhoto[] = [
  // One Direction — replace SVG placeholders with your JPGs
  {
    id: "one-direction-01",
    image: "/harry/one-direction-01.svg",
    era: "One Direction",
    year: "2013",
    label: "Boyband Harry",
    tags: ["curly-hair", "boyband", "stage", "young"],
  },
  {
    id: "one-direction-02",
    image: "/harry/one-direction-02.svg",
    era: "One Direction",
    year: "2014",
    label: "Tour Harry",
    tags: ["curly-hair", "live", "mic", "young"],
  },
  {
    id: "one-direction-03",
    image: "/harry/one-direction-03.svg",
    era: "One Direction",
    year: "2015",
    label: "Red Carpet Harry",
    tags: ["suit", "curly-hair", "smiling", "formal"],
  },

  // HS1
  {
    id: "hs1-debut-01",
    image: "/harry/hs1-debut-01.svg",
    era: "HS1",
    year: "2017",
    label: "Debut Solo Harry",
    tags: ["solo", "quiff", "rock", "jacket"],
  },
  {
    id: "hs1-aria-paisley-01",
    image: "/harry/hs1-aria-paisley-01.jpg",
    era: "HS1",
    year: "2017",
    label: "ARIA Paisley Suit",
    tags: ["paisley", "metallic", "purple-suit", "red-carpet", "quiff"],
  },

  // Fine Line
  {
    id: "fine-line-pearls-01",
    image: "/harry/fine-line-pearls-01.jpg",
    era: "Fine Line",
    year: "2019",
    label: "Pearls & Fuzzy Sweater",
    tags: ["longer-hair", "pearls", "fuzzy-sweater", "colorful", "editorial"],
  },
  {
    id: "fine-line-pastel-01",
    image: "/harry/fine-line-pastel-01.jpg",
    era: "Fine Line",
    year: "2019",
    label: "Fine Line Promo",
    tags: ["butter-yellow", "pastel", "wavy-hair", "editorial", "retro"],
  },
  {
    id: "fine-line-tour-01",
    image: "/harry/fine-line-tour-01.svg",
    era: "Fine Line",
    year: "2020",
    label: "Fine Line Tour Harry",
    tags: ["longer-hair", "colorful", "tour", "jumpsuit"],
  },

  // Harry's House
  {
    id: "harrys-house-kitchen-01",
    image: "/harry/harrys-house-kitchen-01.jpg",
    era: "Harry's House",
    year: "2022",
    label: "Kitchen Harry",
    tags: ["mustache", "yellow-sweater", "red-tie", "domestic", "quirky"],
  },
  {
    id: "harrys-house-yellow-sweater-01",
    image: "/harry/harrys-house-yellow-sweater-01.jpg",
    era: "Harry's House",
    year: "2022",
    label: "Yellow Sweater Editorial",
    tags: ["short-hair", "colorful", "sunglasses", "domestic"],
  },
  {
    id: "harrys-house-desert-01",
    image: "/harry/harrys-house-desert-01.jpg",
    era: "Harry's House",
    year: "2022",
    label: "Desert Hat Harry",
    tags: ["shirtless", "tattoos", "outdoors", "sunny", "casual"],
  },
  {
    id: "harrys-house-blue-satin-01",
    image: "/harry/harrys-house-blue-satin-01.jpg",
    era: "Harry's House",
    year: "2022",
    label: "Blue Satin Jacket",
    tags: ["short-hair", "mustache", "blue-jacket", "satin", "live"],
  },
  {
    id: "harrys-house-studio-01",
    image: "/harry/harrys-house-studio-01.jpg",
    era: "Harry's House",
    year: "2022",
    label: "Studio Rehearsal",
    tags: ["short-hair", "hoodie", "studio", "casual", "stubble"],
  },
  {
    id: "harrys-house-brits-01",
    image: "/harry/harrys-house-brits-01.jpg",
    era: "Harry's House",
    year: "2023",
    label: "BRITs Performance",
    tags: ["high-waisted", "pinstripes", "live", "energetic"],
  },
  {
    id: "harrys-house-grammys-01",
    image: "/harry/harrys-house-grammys-01.jpg",
    era: "Harry's House",
    year: "2023",
    label: "Grammys Cream Tux",
    tags: ["sequins", "suit", "award-show", "jewelry"],
  },
  {
    id: "harrys-house-grammys-pinstripe-01",
    image: "/harry/harrys-house-grammys-pinstripe-01.jpg",
    era: "Harry's House",
    year: "2023",
    label: "Grammys Pinstripe",
    tags: ["short-hair", "pinstripes", "high-waisted", "live"],
  },
  {
    id: "harrys-house-pinstripe-01",
    image: "/harry/harrys-house-pinstripe-01.jpg",
    era: "Harry's House",
    year: "2023",
    label: "High-Waisted Pinstripe",
    tags: ["short-hair", "high-waisted", "performance", "editorial"],
  },

  // Love On Tour
  {
    id: "love-on-tour-rainbow-01",
    image: "/harry/love-on-tour-rainbow-01.jpg",
    era: "Love On Tour",
    year: "2022",
    label: "Rainbow Sequin Jumpsuit",
    tags: ["rainbow", "sequins", "jumpsuit", "live", "flamboyant"],
  },
  {
    id: "love-on-tour-pink-damask-01",
    image: "/harry/love-on-tour-pink-damask-01.jpg",
    era: "Love On Tour",
    year: "2022",
    label: "Pink Damask Suit",
    tags: ["short-hair", "colorful", "floral-print", "tour", "maximalist"],
  },
  {
    id: "love-on-tour-heart-overalls-01",
    image: "/harry/love-on-tour-heart-overalls-01.jpg",
    era: "Love On Tour",
    year: "2022",
    label: "Heart Overalls",
    tags: ["shirtless", "overalls", "hearts", "tattoos", "pink", "live"],
  },

  // Current Harry
  {
    id: "current-harry-runners-world-01",
    image: "/harry/current-harry-runners-world-01.jpg",
    era: "Current Harry",
    year: "2023",
    label: "Runner's World",
    tags: ["short-hair", "shirtless", "tattoos", "athletic", "golden-hour"],
  },
  {
    id: "current-harry-running-01",
    image: "/harry/current-harry-running-01.jpg",
    era: "Current Harry",
    year: "2024",
    label: "Desert Run",
    tags: ["shirtless", "tattoos", "athletic", "sunglasses", "outdoor"],
  },
  {
    id: "current-harry-cowboy-01",
    image: "/harry/current-harry-cowboy-01.jpg",
    era: "Current Harry",
    year: "2024",
    label: "Cowboy Harry",
    tags: ["cowboy-hat", "mustache", "black-and-white", "editorial", "western"],
  },
  {
    id: "current-harry-hoodie-01",
    image: "/harry/current-harry-hoodie-01.jpg",
    era: "Current Harry",
    year: "2024",
    label: "Short Hair & Stubble",
    tags: ["short-hair", "stubble", "casual", "candid", "hoodie"],
  },
  {
    id: "current-harry-blue-jacket-01",
    image: "/harry/current-harry-blue-jacket-01.jpg",
    era: "Current Harry",
    year: "2024",
    label: "Blue Jacket & Matcha",
    tags: ["short-hair", "mustache", "casual", "street-style", "blue-jacket"],
  },
  {
    id: "current-harry-street-01",
    image: "/harry/current-harry-street-01.jpg",
    era: "Current Harry",
    year: "2023",
    label: "Street Style Cap",
    tags: ["oversized-shirt", "wide-leg", "casual", "street-style", "sunglasses"],
  },
  {
    id: "current-harry-jogging-01",
    image: "/harry/current-harry-jogging-01.jpg",
    era: "Current Harry",
    year: "2024",
    label: "Jogging in the City",
    tags: ["casual", "streetwear", "running", "tattoos", "athleisure"],
  },
];

export const getEras = (photos: HarryPhoto[] = harryPhotos): string[] => {
  const seen = new Set<string>();
  const eras: string[] = [];
  for (const photo of photos) {
    if (!seen.has(photo.era)) {
      seen.add(photo.era);
      eras.push(photo.era);
    }
  }
  return eras;
};

export const getPhotoById = (id: string): HarryPhoto | undefined =>
  harryPhotos.find((photo) => photo.id === id);

export const ERA_YEAR_RANGES: Record<string, string> = {
  "One Direction": "2010–2015",
  HS1: "2017–2018",
  "Fine Line": "2019–2021",
  "Harry's House": "2022–2023",
  "Love On Tour": "2021–2023",
  "Current Harry": "2023–now",
};

export const ERA_BLURBS: Record<string, string> = {
  "One Direction":
    "You went back to the beginning.\nThe curls, the chaos, the origin story.\n\nThis is your Harry.",
  HS1: "You survived the debut,\nthe excellent jackets\nand the rockstar glow-up.\n\nThis is your Harry.",
  "Fine Line":
    "You survived the pearls,\nthe colorful suits\nand the questionable facial hair.\n\nThis is your Harry.",
  "Harry's House":
    "You chose soft domestic chaos,\nhigh waists and kitchen vibes.\n\nThis is your Harry.",
  "Love On Tour":
    "You embraced the shimmer\nand the stage presence.\nThis is your ultimate showman Harry.",
  "Current Harry":
    "Short hair. Strong opinions.\nStreet style and golden-hour runs.\n\nThis is your Harry.",
};
