// Single source of truth for site-wide info. Edit text and links here.
// Anything marked TODO is a placeholder waiting on real info.

export const site = {
  name: "Rylan Anderson",
  url: "https://wheresrylan.com",
  // Default meta description and the line under the name on the homepage.
  tagline: "Builder, operator, and occasional tinkerer.", // TODO: make it yours
  location: "TODO: City, State",
  email: "anderson.rylan@gmail.com",
  githubUser: "andersonrylan-gif",
};

// Homepage intro. Each string is one paragraph.
export const intro = {
  greeting: "Hi, I'm Rylan.",
  paragraphs: [
    "I'm a product manager who likes building things: tools, side projects, and the occasional too-ambitious weekend idea.", // TODO: your voice
    "This is where I keep my work, the things I've made, and a few notes on everything else.",
  ],
};

export type Social = { label: string; href: string };

export const socials: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/wheresrylan/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/TODO" }, // TODO: handle
  { label: "GitHub", href: `https://github.com/${site.githubUser}` },
  { label: "Email", href: `mailto:${site.email}` },
];

// Main navigation, in order. Also drives the homepage "Explore" list.
export const nav = [
  { href: "/professional", label: "Professional", blurb: "Work & experience" },
  { href: "/projects", label: "Projects", blurb: "Things I've built" },
  { href: "/about", label: "About", blurb: "Who is Rylan?" },
  { href: "/fun", label: "Fun", blurb: "Everything else" },
] as const;
