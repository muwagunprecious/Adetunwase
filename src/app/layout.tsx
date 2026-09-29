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
  metadataBase: new URL("https://www.adetunwase.com"),

  title: {
    default: "Adetunwase Adenle — Artist | Educator | Social Entrepreneur",
    template: "%s | Adetunwase Adenle",
  },
  description:
    "Adetunwase Adenle is a Nigerian art educator, visual artist, and social entrepreneur using creativity, education, and innovation to support underserved communities.",
  keywords: [
    "Adetunwase Adenle",
    "art educator",
    "visual artist",
    "social entrepreneur",
    "Slum Art Foundation",
    "community art education",
    "Nigeria",
    "Guinness World Records",
    "circular economy",
    "GoCycle",
  ],
  authors: [{ name: "Adetunwase Adenle", url: "https://www.adetunwase.com" }],
  creator: "Adetunwase Adenle",
  publisher: "Adetunwase Adenle",

  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adetunwase.com",
    siteName: "Adetunwase Adenle",
    title: "Adetunwase Adenle — Artist | Educator | Social Entrepreneur",
    description:
      "Artist, educator, and social entrepreneur using creativity and learning to support underserved communities.",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px image in /public
        width: 1200,
        height: 630,
        alt: "Adetunwase Adenle — Artist, Educator & Social Entrepreneur",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Adetunwase Adenle — Artist | Educator | Social Entrepreneur",
    description:
      "Artist, educator, and social entrepreneur using creativity and learning to support underserved communities.",
    images: ["/og-image.jpg"],
    creator: "@adetunwase360",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
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
  name: "Adetunwase Adenle",
  url: "https://www.adetunwase.com",
  image: "https://www.gocycle.ng/_next/image?q=75&url=%2Fimages%2Fadetunwase-adenle.jpg&w=384",
  jobTitle: "Artist, Art Educator & Social Entrepreneur",
  description:
    "Nigerian art educator, visual artist, and social entrepreneur working in community art education and environmental innovation.",
  sameAs: [
    "https://x.com/adetunwase360",
    "https://linkedin.com/in/adetunwase-adenle-7359791b",
    "https://instagram.com/adetunwase360",
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
