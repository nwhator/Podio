import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Podio | Helping Children Find Their Voice",
    template: "%s | Podio",
  },
  description:
    "Live online communication, confidence, and public speaking coaching for children aged 8-18 in the UK.",
  icons: {
    icon: "/podio-icon.svg",
    apple: "/podio-icon.svg",
  },
  openGraph: {
    title: "Podio | Helping Children Find Their Voice",
    description:
      "Live online communication, confidence, and public speaking coaching for children aged 8-18 in the UK.",
    url: "https://podioforkids.com",
    siteName: "Podio",
    images: [
      {
        url: "https://media.base44.com/images/public/6a213dc397307c380a637125/812a0c1d8_generated_image.png",
        width: 1200,
        height: 630,
        alt: "Podio – Helping Children Find Their Voice",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podio | Helping Children Find Their Voice",
    description:
      "Live online communication, confidence, and public speaking coaching for children aged 8-18 in the UK.",
    images: [
      "https://media.base44.com/images/public/6a213dc397307c380a637125/812a0c1d8_generated_image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://podioforkids.com"),
  alternates: {
    canonical: "https://podioforkids.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
