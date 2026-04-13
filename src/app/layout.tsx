import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import BackToTop from "@/components/ui/BackToTopButton";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Agida - Digital Strategist & Entrepreneur",
  description:
    "Emmanuel Agida is a digital strategist, entrepreneur, and founder of Emmanuels Digital. With over Half a decade of experience, he has helped businesses grow through innovative digital strategies. Based in Lagos, Nigeria, Emmanuel is passionate about leveraging technology to drive business success and empower local communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jost.variable} h-full antialiased`}
    >
      <body className="flex flex-col" cz-shortcut-listen="true">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
