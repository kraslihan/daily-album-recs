# Which Harry is your Harry?

Mobile-first “this or that” mini-game that finds your favorite Harry Styles era, look, and top 3 — in about 3 minutes.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

1. **Intro** — start the battle  
2. **Era battle** (~15 taps) — cross-era exploration → preference narrowing  
3. **Maybe round** — settle “I literally can’t choose” pairs (if any)  
4. **Final battle** — top two Harrys  
5. **Result** — screenshot-ready card + share

Game state lives in React (+ optional `localStorage` resume). No backend.

## Add your photos

Put files in `public/harry/` using the names listed in [`public/harry/README.md`](public/harry/README.md). Catalog + eras are driven by [`src/data/harryData.ts`](src/data/harryData.ts) — eras are not hard-coded in the UI.

Placeholder `.svg` files stand in for One Direction / a couple missing looks until you drop in JPGs (then update the `image` path in `harryData.ts`).

## Structure

```
src/
  data/harryData.ts          # photo catalog
  lib/harry/                 # algorithm, storage, reactions
  components/harry/          # Intro, Battle, Final, Result, …
  app/page.tsx               # game entry
public/harry/                # images
```
