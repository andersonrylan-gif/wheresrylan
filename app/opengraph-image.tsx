import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Archivo Black for the bold look; falls back to the default font if the fetch fails.
async function loadDisplayFont(text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Archivo+Black&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const font = await loadDisplayFont("RYLANDESOWHCM.rylandesowhcm");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#fff",
          padding: 72,
          fontFamily: font ? "Archivo Black" : "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>
          whereasrylan.com
        </div>
        <div
          style={{
            fontSize: 150,
            lineHeight: 0.85,
            letterSpacing: -6,
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Rylan</span>
          <span>Anderson</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Archivo Black", data: font, weight: 400, style: "normal" }]
        : undefined,
    },
  );
}
