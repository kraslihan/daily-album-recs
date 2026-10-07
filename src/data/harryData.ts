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
  YEAR_TO_ERA[year] ?? "Harry Styles";

type PhotoSeed = {
  id: string;
  year: string;
  label: string;
  tags: string[];
};

/**
 * Files live in /public/harry/ as `{year}-{nn}.jpg`.
 * Eras are derived from YEAR_TO_ERA — not hard-coded in the UI.
 * Photos are added era-by-era.
 * Current: Harry Styles (2017) + Fine Line (2019–2021).
 */
const PHOTO_SEEDS: PhotoSeed[] = [
  // Harry Styles — 2017
  {
    id: "2017-01",
    year: "2017",
    label: "SNL Tropical Shirt",
    tags: ["snl", "tropical", "smile", "debut"],
  },
  {
    id: "2017-02",
    year: "2017",
    label: "Sunday Times Pinstripe",
    tags: ["editorial", "pinstripe", "seated", "magazine"],
  },
  {
    id: "2017-03",
    year: "2017",
    label: "Mint Suit Live",
    tags: ["live", "suit", "stage", "boots"],
  },
  {
    id: "2017-04",
    year: "2017",
    label: "Harlequin Gucci Suit",
    tags: ["gucci", "stage", "bow", "suit"],
  },
  {
    id: "2017-05",
    year: "2017",
    label: "Lace Collar Portrait",
    tags: ["portrait", "lace", "soft", "promo"],
  },
  {
    id: "2017-06",
    year: "2017",
    label: "Burgundy Camp Collar",
    tags: ["casual", "smile", "shirt", "press"],
  },
  {
    id: "2017-07",
    year: "2017",
    label: "Sunday Times Open Blazer",
    tags: ["editorial", "pinstripe", "tattoos", "magazine"],
  },
  {
    id: "2017-08",
    year: "2017",
    label: "Red Floral Guitar",
    tags: ["floral", "guitar", "suit", "live"],
  },

  // Fine Line — 2019
  {
    id: "2019-01",
    year: "2019",
    label: "Met Gala Sheer Black",
    tags: ["met-gala", "pearls", "sheer", "editorial"],
  },
  {
    id: "2019-02",
    year: "2019",
    label: "Rolling Stone Meadow",
    tags: ["rolling-stone", "jumpsuit", "outdoors", "editorial"],
  },
  {
    id: "2019-03",
    year: "2019",
    label: "Fine Line Album Cover",
    tags: ["album", "pink", "fisheye", "promo"],
  },
  {
    id: "2019-04",
    year: "2019",
    label: "Ruffle Sleeves B&W",
    tags: ["ruffles", "black-and-white", "editorial", "playful"],
  },
  {
    id: "2019-05",
    year: "2019",
    label: "Pastel Promo Stripes",
    tags: ["pastel", "promo", "editorial", "tank"],
  },

  // Fine Line — 2020
  {
    id: "2020-01",
    year: "2020",
    label: "Vogue Dress Cover",
    tags: ["vogue", "dress", "gucci", "cover"],
  },

  // Fine Line — 2021
  {
    id: "2021-01",
    year: "2021",
    label: "Cream Vest Live",
    tags: ["live", "vest", "tour", "smile"],
  },
  {
    id: "2021-02",
    year: "2021",
    label: "Rainbow Sequin Jumpsuit",
    tags: ["sequins", "rainbow", "tour", "live"],
  },
  {
    id: "2021-03",
    year: "2021",
    label: "Grammys Feather Boa",
    tags: ["grammys", "boa", "leather", "live"],
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
