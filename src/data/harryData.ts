export type HarryPhoto = {
  id: string;
  image: string;
  era: string;
  year: string;
  label: string;
  tags: string[];
};

/** Year → era mapping (source of truth for catalog eras). */
export const YEAR_TO_ERA: Record<string, string> = {
  "2017": "Harry Styles",
  "2019": "Fine Line",
  "2020": "Fine Line",
  "2021": "Fine Line",
  "2022": "Harry's House",
  "2023": "Harry's House",
  "2024": "Harry's House",
  "2026": "Kiss All the Time. Disco, Occasionally.",
};

export const eraForYear = (year: string): string =>
  YEAR_TO_ERA[year] ?? "Harry's House";

type PhotoSeed = {
  id: string;
  year: string;
  label: string;
  tags: string[];
};

/**
 * Files live in /public/harry/ as `{year}-{nn}.jpg`.
 * Eras are derived from YEAR_TO_ERA — not hard-coded in the UI.
 */
const PHOTO_SEEDS: PhotoSeed[] = [
  // 2017 — Harry Styles
  {
    id: "2017-01",
    year: "2017",
    label: "SNL Tropical Shirt",
    tags: ["live", "tropical", "quiff", "debut"],
  },
  {
    id: "2017-02",
    year: "2017",
    label: "Harlequin Gucci Suit",
    tags: ["gucci", "stage", "bow", "suit"],
  },
  {
    id: "2017-03",
    year: "2017",
    label: "Red Floral Guitar",
    tags: ["floral", "guitar", "suit", "live"],
  },

  // 2019–2021 — Fine Line
  {
    id: "2019-01",
    year: "2019",
    label: "Met Gala Sheer Black",
    tags: ["met-gala", "pearls", "sheer", "editorial"],
  },
  {
    id: "2019-02",
    year: "2019",
    label: "Fine Line Promo Pastel",
    tags: ["pastel", "editorial", "wavy-hair", "promo"],
  },
  {
    id: "2021-01",
    year: "2021",
    label: "Blue Chevron Suit",
    tags: ["tour", "chevron", "guitar", "sequins"],
  },

  // 2022–2024 — Harry's House
  {
    id: "2022-01",
    year: "2022",
    label: "Cream Sleeveless Vest",
    tags: ["live", "vest", "high-waisted", "tour"],
  },
  {
    id: "2022-02",
    year: "2022",
    label: "Pink Feather Coat",
    tags: ["coachella", "feathers", "pink", "stage"],
  },
  {
    id: "2022-03",
    year: "2022",
    label: "Disco Sequin Vest",
    tags: ["sequins", "disco", "live", "tour"],
  },
  {
    id: "2022-04",
    year: "2022",
    label: "Mirror Sequin Overalls",
    tags: ["sequins", "coachella", "shirtless", "live"],
  },
  {
    id: "2022-05",
    year: "2022",
    label: "Desert Duck Hat",
    tags: ["shirtless", "outdoors", "hat", "editorial"],
  },
  {
    id: "2023-01",
    year: "2023",
    label: "Grammys Cream Blazer",
    tags: ["grammys", "sequins", "award", "suit"],
  },
  {
    id: "2023-02",
    year: "2023",
    label: "Grammys Pinstripe",
    tags: ["grammys", "high-waisted", "pinstripes", "live"],
  },
  {
    id: "2023-03",
    year: "2023",
    label: "Grey Glitter Crop Jacket",
    tags: ["grammys", "glitter", "jeans", "shirtless"],
  },
  {
    id: "2023-04",
    year: "2023",
    label: "Yellow Stripe Knit",
    tags: ["live", "stripes", "knit", "tour"],
  },
  {
    id: "2023-05",
    year: "2023",
    label: "Slane Yellow Stripe",
    tags: ["live", "stripes", "tour", "stadium"],
  },
  {
    id: "2024-01",
    year: "2024",
    label: "Navy Jacket & Florals",
    tags: ["editorial", "navy", "flowers", "studio"],
  },
  {
    id: "2024-02",
    year: "2024",
    label: "Runner's World",
    tags: ["athletic", "shirtless", "outdoors", "short-hair"],
  },

  // 2026 — Kiss All the Time. Disco, Occasionally.
  {
    id: "2026-01",
    year: "2026",
    label: "Desert Run",
    tags: ["athletic", "shirtless", "desert", "sunglasses"],
  },
];

export const harryPhotos: HarryPhoto[] = PHOTO_SEEDS.map((seed) => ({
  id: seed.id,
  image: `/harry/${seed.id}.jpg`,
  era: eraForYear(seed.year),
  year: seed.year,
  label: seed.label,
  tags: seed.tags,
}));

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
  "Harry Styles": "2017",
  "Fine Line": "2019–2021",
  "Harry's House": "2022–2024",
  "Kiss All the Time. Disco, Occasionally.": "2026",
};

export const ERA_BLURBS: Record<string, string> = {
  "Harry Styles":
    "You survived the debut,\nthe excellent jackets\nand the rockstar glow-up.\n\nThis is your Harry.",
  "Fine Line":
    "You survived the pearls,\nthe colorful suits\nand the questionable facial hair.\n\nThis is your Harry.",
  "Harry's House":
    "You chose soft domestic chaos,\nhigh waists and kitchen vibes.\n\nThis is your Harry.",
  "Kiss All the Time. Disco, Occasionally.":
    "Disco energy. Soft obsession.\nThe newest chapter wins.\n\nThis is your Harry.",
};
