"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import MediaCard from "@/components/ui/MediaCard";
import { mediaList } from "@/constants/media";

const Media = () => {
  return (
    <section id="media-and-press" className="w-full bg-amber-50 font-jost pt-6">
      <Container>
        <div className="my-10">
          <div className="border-b border-black/10 pb-5">
            <Badge title="MEDIA & PRESS" className="text-primaryBlack/20" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full lg:w-1/3">
              Art, learning, and{" "}
              <span className="text-primaryGold">community stories.</span>
            </Heading>
            <div className="w-full lg:w-2/5 text-primaryBlack/40 text-md font-normal">
              Selected reporting on Slum Art Foundation, children's creative
              education, and environmental innovation.
            </div>
          </div>

          <div 
            className="w-full grid gap-2 my-12 
              grid-cols-1 grid-rows-5
              sm:h-256 sm:grid-cols-2 sm:grid-rows-3
              lg:h-192 lg:grid-cols-10 lg:grid-rows-6"
          >
            {mediaList.map((media) => (
              <MediaCard 
                key={media.title}
                title={media.title}
                description={media.description}
                imageSrc={media.imageSrc}
                url={media.url}
                style={media.style}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Media
