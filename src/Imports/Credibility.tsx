import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { stats } from "@/constants/stats";
import type { StatItem } from "@/types/stats";

const StatCard = ({ stat }: { stat: StatItem }) => {
  const Icon = stat.icon;
  const words = stat.label.split(" ");
  const firstWord = words[0];
  const rest = words.slice(1).join(" ");

  return (
    <div className="group font-jost relative flex flex-col justify-end p-6 sm:p-8 bg-[#111111] overflow-hidden cursor-default transition-all hover:-translate-y-2 duration-300 border-t-8 border-t-transparent hover:border-t-primaryGold min-h-60 sm:min-h-100">
      {/* Gold gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(204,153,51,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Faint background number */}
      <span className="absolute top-4 right-4 text-[80px] sm:text-[140px] font-black text-white/1 leading-none select-none pointer-events-none">
        {stat.id}
      </span>

      {/* Icon */}
      <Icon size={24} className="text-primaryGold mb-4 relative z-10" />

      {/* Stat number + label */}
      <div className="relative z-10">
        <p className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          <span className="text-primaryGold">{stat.number}</span> {firstWord}
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {rest}
        </p>
      </div>
    </div>
  );
};

const Credibility = () => {
  return (
    <section className="w-full bg-primaryBlack font-jost">
      {/* Header */}
      <Container>
        <div className="mt-10 border-b border-white/10">
          <Badge title="CREDIBILITY" />

          <div className="flex flex-col mt-5 gap-2">
            <Heading
              as="h3"
              className="lg:text-4xl font-bold animate-fade-in-up"
            >
              A Track record of my{" "}
              <span className="text-primaryGold">leadership journey.</span>
            </Heading>

            <Paragraph className="mb-10 sm:px-0 lg:w-3/5">
              Half a decade of strategic leadership marked by measurable
              outcomes, cross-sector influence, and a consistent track record of
              delivering results at scale.
            </Paragraph>
          </div>
        </div>

        {/* Stats grid */}
        <div className="w-full bg-black pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {stats.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Credibility;
