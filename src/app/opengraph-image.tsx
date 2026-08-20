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
          background: "linear-gradient(145deg, #070609 0%, #100A16 55%, #1A0F24 100%)",
          color: "#F5F0F5",
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
            color: "#DCC6FF",
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
              color: "#DCC6FF",
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
            color: "#FF4FD8",
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
