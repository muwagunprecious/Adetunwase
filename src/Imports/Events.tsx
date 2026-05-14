"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import EventCard from "@/components/ui/EventCard";
import { eventList } from "@/constants/events";


const Events = () => {
  return (
    <section id="events" className="w-full bg-amber-50 font-jost">
      <Container>
        <div className="my-8">
          <div className="border-b border-black/10 pb-5">
            <Badge title="EVENTS" className="text-primaryBlack/20" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full lg:w-1/3">
              Events That Inspire and Mobilize
            </Heading>
            <div className="w-full lg:w-2/5 text-primaryBlack/40 text-md tracking-tight leading-tight">
              A curated portfolio of impactful events—from conferences and summits 
              to community engagements—designed to spark conversations, drive collaboration, 
              and translate vision into collective action.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-12 items-stretch">
            {eventList.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                imageSrc={event.imageSrc}
                url={event.url}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Events