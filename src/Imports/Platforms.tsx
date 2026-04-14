"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

const Platforms = () => {
  return (
    <section id="platforms" className="w-full bg-primatyBlack font-jost pt-5">
      <Container>
        <div className="mt-10">
          <div className="border-b border-white/10 pb-5">
            <Badge title="PLATFORMS" />
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <Heading as="h3" className="lg:text-4xl font-bold">
              Driving a future built on <br />
              <span className="text-primaryGold">Innovation & impact.</span>
            </Heading>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Platforms;
