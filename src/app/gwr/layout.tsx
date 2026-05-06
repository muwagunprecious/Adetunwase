import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
});

export default function WatchlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`min-h-screen w-full bg-[#080808] antialiased ${bricolage.className}`}
    >
      {children}
    </div>
  );
}
