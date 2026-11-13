import { site } from "./site";

// Copy for /about. Each section is a small label plus one or more paragraphs.

export const about = {
  intro:
    "TODO: Hi, I'm Rylan. Two or three sentences on who you are, in your own voice.",
  sections: [
    { label: "Based in", paragraphs: [site.location] },
    {
      label: "Background",
      paragraphs: ["TODO: where you grew up, school, how you got into what you do."],
    },
    {
      label: "Currently",
      paragraphs: ["TODO: what you're working on, learning, or obsessed with."],
    },
  ],
};
