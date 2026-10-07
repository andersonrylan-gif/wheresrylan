export type Project = {
  slug: string;
  name: string;
  year: string;
  tagline: string;
  description: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

// Newest first. Add a project by copying an entry.
export const projects: Project[] = [
  {
    slug: "rylanflow",
    name: "RylanFlow",
    year: "2026",
    tagline: "Push-to-talk dictation and meeting transcription for macOS.",
    description: [
      "Hold a key, talk, and the text lands wherever your cursor is. Everything runs locally on Apple Silicon with Whisper, so nothing leaves the machine.",
      "It also records meetings, separates speakers, and remembers voices across meetings so transcripts label people automatically. An MCP server lets AI assistants search past dictations and meetings.",
    ],
    stack: ["Python", "mlx-whisper", "SQLite", "PyInstaller", "MCP"],
    links: [
      { label: "GitHub", href: "https://github.com/andersonrylan-gif/RylanFlow" },
    ],
  },
  {
    slug: "whereasrylan",
    name: "whereasrylan.com",
    year: "2026",
    tagline: "This website.",
    description: [
      "A bold, black-and-white personal site. Statically rendered with Next.js and deployed on Vercel.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    links: [
      { label: "GitHub", href: "https://github.com/andersonrylan-gif/whereasrylan" },
    ],
  },
  // TODO: add more projects
];
