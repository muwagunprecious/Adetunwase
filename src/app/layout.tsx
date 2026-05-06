import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import ClientComponent from "@/components/layouts/ClientComponents";
import BackToTop from "@/components/ui/BackToTopButton";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Agida - Leader | Entreprenuer | Catalyst",
  description:
    "Emmanuel Agida is a digital strategist, entrepreneur, and founder of Emmanuels Digital.",
};

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
      <body
        className="min-h-screen flex flex-col"
        cz-shortcut-listen="true"
      >
        {/* pass subdomain correctly */}
        <ClientComponent subdomain={subdomain}>
          {children}
          {subdomain !== "gwr" && <BackToTop />}
        </ClientComponent>
      </body>
    </html>
  );
}
