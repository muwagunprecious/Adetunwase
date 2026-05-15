import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import ClientComponent from "@/components/layouts/ClientComponents";
import BackToTop from "@/components/ui/BackToTopButton";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

// Viewport & Theme Color
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuelagida.com"),

  title: {
    default: "Emmanuel Agida — Leader | Entrepreneur | Catalyst",
    template: "%s | Emmanuel Agida",
  },
  description:
    "Emmanuel Agida is a purpose-driven leader, strategist, and entrepreneur committed to building systems, platforms, and people for long-term impact.",
  keywords: [
    "Emmanuel Agida",
    "leader",
    "entrepreneur",
    "digital strategist",
    "catalyst",
    "speaker",
    "Africa",
    "youth",
    "impact",
    "Achievers Summit",
    "GWR | Guiness World record",
    "100 Under40 Awards",
  ],
  authors: [{ name: "Emmanuel Agida", url: "https://emmanuelagida.com" }],
  creator: "Emmanuel Agida",
  publisher: "Emmanuel Agida",

  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmanuelagida.com",
    siteName: "Emmanuel Agida",
    title: "Emmanuel Agida — Leader | Entrepreneur | Catalyst",
    description:
      "Purpose-driven leader, strategist, and entrepreneur committed to building systems, platforms, and people for long-term impact.",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px image in /public
        width: 1200,
        height: 630,
        alt: "Emmanuel Agida — Leader, Entrepreneur & Catalyst",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Agida — Leader | Entrepreneur | Catalyst",
    description:
      "Purpose-driven leader, strategist, and entrepreneur committed to building systems, platforms, and people for long-term impact.",
    images: ["/og-image.jpg"],
    creator: "@emmanuelagida", // update to real handle
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // PWA Manifest
  manifest: "/manifest.json",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emmanuel Agida",
  url: "https://emmanuelagida.com",
  image: "https://emmanuelagida.com/og-image.jpg",
  jobTitle: "Leader, Entrepreneur & Catalyst",
  description:
    "Purpose-driven leader, strategist, and entrepreneur committed to building systems, platforms, and people for long-term impact.",
  sameAs: [
    "https://twitter.com/emmanuelagida", // update to real handles
    "https://linkedin.com/in/emmanuelagida",
    "https://instagram.com/emmanuelagida",
  ],
};

// Root Layout
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const hostname = host.split(":")[0];
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost";

  let subdomain: string | undefined;
  if (hostname === "gwr.localhost" || hostname === `gwr.${rootDomain}`) {
    subdomain = "gwr";
  }

  return (
    <html lang="en" className={`${jost.variable} antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
        <ClientComponent subdomain={subdomain}>
          {children}
          {subdomain !== "gwr" && <BackToTop />}
        </ClientComponent>
      </body>
    </html>
  );
}
