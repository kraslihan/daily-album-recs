const REACTIONS = [
  "Interesting choice 👀",
  "Okay… I see the vision.",
  "That jacket won again.",
  "Fine Line is fighting for its life.",
  "Harry's House just entered the chat.",
  "Disco mode: suspiciously activated.",
  "Your type is becoming suspiciously obvious.",
  "Bold. Chaotic. Noted.",
  "The haircut discourse continues.",
  "Someone has excellent taste in accessories.",
  "A decisive Harry scholar.",
  "We're learning things about you.",
  "That one had main-character energy.",
  "Respectfully, the vibes are loud.",
];

export const shouldShowReaction = (selectionsSinceReaction: number): boolean => {
  // Roughly every 3–4 selections
  if (selectionsSinceReaction < 3) return false;
  if (selectionsSinceReaction >= 4) return true;
  return Math.random() < 0.45;
};

export const pickReaction = (): string => {
  const index = Math.floor(Math.random() * REACTIONS.length);
  return REACTIONS[index] ?? REACTIONS[0];
};
