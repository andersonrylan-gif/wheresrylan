// Single source of truth for the site. Edit text and links here.
// Anything marked TODO is a placeholder waiting on real info.

export const site = {
  name: "Rylan Anderson",
  url: "https://wheresrylan.com",
  // One line under the name in the header, and the default meta description.
  tagline: "Builder, operator, and occasional tinkerer.", // TODO: make it yours
  location: "TODO: City, State",
  email: "anderson.rylan@gmail.com",
};

export type Social = { label: string; href: string };

export const socials: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/TODO" }, // TODO: handle
  { label: "LinkedIn", href: "https://www.linkedin.com/in/TODO" }, // TODO: handle
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: "https://github.com/andersonrylan-gif" },
];

export const tiles = [
  { href: "/professional", label: "Professional", blurb: "Work & experience" },
  { href: "/projects", label: "Projects", blurb: "Things I've built" },
  { href: "/about", label: "About", blurb: "Who I am" },
  { href: "/fun", label: "Fun", blurb: "Everything else" },
] as const;
