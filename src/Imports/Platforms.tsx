"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import PlatformCard from "@/components/ui/PlatfromCard";
import { platformList } from "@/constants/platforms";

const Platforms = () => {
  return (
    <section id="platforms" className="w-full bg-primaryBlack font-jost pt-5">
      <Container>
        <div className="my-10">
          <div className="border-b border-white/10 pb-5">
            <Badge title="PLATFORMS" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-white/70 tracking-tighter w-full lg:w-1/2">
              Driving a future built on <br />
              <span className="text-primaryGold italic">Innovation and impact.</span>
            </Heading>
            <div className="w-full lg:w-2/5 text-white/40 text-lg">
              A portfolio of strategic platforms designed to execute 
              vision at scale—each one structured to drive innovation, 
              empower communities, and deliver measurable outcomes across key sectors.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-12">
            {platformList.map((platform) => (
              <PlatformCard
                key={platform.id}
                id={platform.id}
                title={platform.title}
                description={platform.description}
                imageSrc={platform.imageSrc}
                url={platform.url}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Platforms;
