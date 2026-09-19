import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #3d1158 0%, #6B2D8B 50%, #8B4FA8 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 32,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="80"
          height="80"
        >
          <rect width="64" height="64" rx="12" fill="#ffbf47" />
          <g
            transform="translate(12,12) scale(1.667)"
            stroke="#3d1158"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
            <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
            <circle cx="16" cy="7" r="5" />
          </g>
        </svg>
        <span
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Podio
        </span>
      </div>
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#ffbf47",
          textAlign: "center",
          maxWidth: 800,
          lineHeight: 1.2,
        }}
      >
        Helping Children Find Their Voice
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 22,
          color: "#e8d4f5",
          textAlign: "center",
          maxWidth: 700,
        }}
      >
        Live online communication, confidence &#38; public speaking coaching
      </div>
    </div>,
    { ...size },
  );
}
