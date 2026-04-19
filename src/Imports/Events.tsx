"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import EventCard from "@/components/ui/EventCard";
import { EventCardProps } from "@/types/events";

const eventList: EventCardProps[] = [
  {
    title: "Achiever summit",
    date: "August 11th - 12th 2026",
    location: "Flight Edition | Lagos - Nigeria by EAI",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "100Under40 Award",
    date: "August 13th 2026",
    location: "Lagos - Nigeria by EAI",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "Africa Renaissance Conference",
    date: "May 21st 2027",
    location: "London - United Kingdom by CentreGED",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "Achievers Summit (Bridge Edition)",
    date: "August 12th & 13th 2027",
    location: "Bridge Edition, Lagos - Nigeria by EAI",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "Leadership and Economic Development Masterclass",
    date: "May 8th - 20th 2028",
    location: "Ontario - Canada by IGE",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "Africa Tech, Tech & Energy Summit",
    date: "September 14th - 16th 2028",
    location: "Abuja - Nigeria by CentreGED",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "Africa Economic Summit",
    date: "October 19th - 21st 2028",
    location: "Monrovia - Liberia by CentreGED",
    imageSrc: "/events/sample_event.png",
  },
  {
    title: "Africa Governance Summit by CentreGED",
    date: "November 16th - 18th 2028",
    location: "Accra - Ghana by CentreGED",
    imageSrc: "/events/sample_event.png",
  },
];

const Events = () => {
  return (
    <section id="events" className="w-full bg-amber-50 font-jost pt-6">
      <Container>
        <div className="my-10">
          <div className="border-b border-black/10 pb-5">
            <Badge title="EVENTS" className="text-primaryBlack/20" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full lg:w-1/3">
              Events That Inspire and Mobilize
            </Heading>
            <div className="w-full lg:w-2/5 text-primaryBlack/40 text-lg">
              A curated portfolio of impactful events—from conferences and summits 
              to community engagements—designed to spark conversations, drive collaboration, 
              and translate vision into collective action.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {eventList.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                location={event.location}
                imageSrc={event.imageSrc}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Events