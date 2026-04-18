export type Puzzle = {
  id: string;
  slug: string;
  points: number;
};

export const PUZZLES: Record<string, Puzzle> = {
  "cipher-one": {
    id: "cipher-one",
    slug: "static/files/declassified",
    points: 100,
  },
};
