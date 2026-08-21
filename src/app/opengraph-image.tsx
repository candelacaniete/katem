import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — Estudio digital boutique`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #121212 0%, #1A1518 60%, #2A2226 100%)",
          color: "#F2EBE6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#D4A0AE",
          }}
        >
          <span>{site.brand}</span>
          <span>{site.tagline}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Experiencias digitales que se recuerdan.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#C9BDD4",
              maxWidth: 760,
              lineHeight: 1.35,
            }}
          >
            Estudio independiente en Buenos Aires. Diseño, estrategia y
            tecnología.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#C97B8F",
          }}
        >
          <span>{site.domain}</span>
          <span>Buenos Aires / Mundo</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
