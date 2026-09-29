"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import { engagements } from "@/constants/engagements";
import PhotoSlider from "@/components/ui/PhotoSlider";

const Leadership = () => {
  return (
    <section id="leadership" className="w-full bg-amber-50 font-jost pt-6">
      <Container>
        <div className="my-10">
          <div className="border-b border-black/10 pb-5">
            <Badge
              title="STRATEGIC ENGAGEMENTS"
              className="text-primaryBlack/20"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading
              as="h3"
              className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full lg:w-1/3"
            >
              Creativity in Action.
            </Heading>
            <div className="w-full lg:w-2/5 text-primaryBlack/40 text-md font-normal">
              Slum Art children creating, learning, and sharing their work in Ijora-Badia.
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-8 sm:mt-12 mb-16">
            <PhotoSlider engagements={engagements} />
            <PhotoSlider engagements={engagements} direction="reverse" />
            <PhotoSlider engagements={engagements} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Leadership;
