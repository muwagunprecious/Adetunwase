"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import MediaCard from "@/components/ui/MediaCard";

const Media = () => {
  return (
    <section id="media" className="w-full bg-amber-50 font-jost pt-6">
      <Container>
        <div className="my-10">
          <div className="border-b border-black/10 pb-5">
            <Badge title="MEDIA & PRESS" className="text-primaryBlack/20" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full lg:w-1/3">
              Recognized. Featured. 
              <span className="text-primaryGold"> Trusted.</span>
            </Heading>
            <div className="w-full lg:w-2/5 text-primaryBlack/40 text-lg">
              Featured across leading platforms and media outlets, 
              highlighting thought leadership, strategic insights, 
              and impactful contributions to key sectors.
            </div>
          </div>

          <div 
            className="w-full grid gap-4 my-12 
              grid-cols-1 grid-rows-5
              sm:h-[64rem] sm:grid-cols-2 sm:grid-rows-3
              lg:h-[48rem] lg:grid-cols-10 lg:grid-rows-6"
          >
            <div className="h-64 sm:h-auto sm:col-span-2 sm:row-span-1 lg:col-span-6 lg:row-span-4">
              <MediaCard 
                title="Main Publication"
                description="Featured across leading platforms and media outlets, highlighting thought leadership, strategic insights, and impactful contributions to key sectors."
                imageSrc="/media/media_1.png"
                url="#link-to-media"
              />
            </div>
            <div className="h-64 sm:h-auto lg:col-span-4 lg:row-span-3">
              <MediaCard 
                title="Redefining Leadership in a Rapidly Changing World."
                description="A deep dive into strategic thinking, innovation, and future-focused governance."
                imageSrc="/media/media_2.png"
                url="#link-to-media"
              />
            </div>
            <div className="h-64 sm:h-auto lg:col-span-4 lg:row-span-3">
              <MediaCard 
                title="Why Sustainable Growth Requires Bold Leadership Decisions."
                description="Insights on balancing economic expansion with long-term impact."
                imageSrc="/media/media_3.png"
                url="#link-to-media"
              />
            </div>
            <div className="h-64 sm:h-auto lg:col-span-3 lg:row-span-2">
              <MediaCard 
                title="From Vision to Execution: A Leadership Journey."
                description="An inside look at turning ideas into scalable results."
                imageSrc="/media/media_4.png"
                url="#link-to-media"
              />
            </div>
            <div className="h-64 sm:h-auto lg:col-span-3 lg:row-span-2">
              <MediaCard 
                title="Building Systems That Outlast Leadership."
                description="A perspective on institutional strength and legacy-driven leadership."
                imageSrc="/media/media_5.png"
                url="#link-to-media"
              />
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Media