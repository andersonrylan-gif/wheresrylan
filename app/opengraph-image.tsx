import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Lato to match the site; falls back to the default font if the fetch fails.
async function loadFont(text: string, weight: number) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Lato:wght@${weight}&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const name = site.name;
  const label = "WHERESRYLAN.COM";
  const [light, bold] = await Promise.all([
    loadFont(name, 300),
    loadFont(label, 700),
  ]);
  const fonts = [
    light && { name: "Lato", data: light, weight: 300 as const, style: "normal" as const },
    bold && { name: "Lato", data: bold, weight: 700 as const, style: "normal" as const },
  ].filter((f) => !!f);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#111111",
          fontFamily: fonts.length ? "Lato" : "sans-serif",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 300, letterSpacing: 2 }}>{name}</div>
        <div style={{ width: 64, height: 2, background: "#e4e4e4", margin: "40px 0" }} />
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 6, color: "#58595a" }}>
          {label}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
