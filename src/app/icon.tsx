import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = { width: 32, height: 32 };

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6B2D8B",
        borderRadius: 6,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="28"
        height="28"
      >
        <g
          transform="translate(12,12) scale(1.667)"
          stroke="white"
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
    </div>,
    { ...size },
  );
}
