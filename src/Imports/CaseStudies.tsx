"use client";

import React from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/constants/caseStudies";


const CaseStudies = () => {
  return (
    <section id="case-studies" className="w-full bg-amber-50 font-jost">
      <Container>
        <div className="my-8">
          <div className="border-b border-black/10 pb-5">
            <Badge title="CASE STUDIES" className="text-primaryBlack/20" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading as="h3" className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full lg:w-2/5">
              Case studies in <span className="text-primaryGold"> Leadership and Impact</span>
            </Heading>
            <div className="w-full lg:w-2/5 text-primaryBlack/40 text-md tracking-tight font-normal">
              An in-depth look at selected initiatives—highlighting the challenges addressed, 
              strategies implemented, and measurable outcomes achieved through focused leadership and execution.
            </div>
          </div>

          <div className="grid grid-cols-12 lg:grid-rows-2 gap-2 my-10">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                title={caseStudy.title}
                description={caseStudy.description}
                imageSrc={caseStudy.imageSrc}
                url={caseStudy.url}
                className={caseStudy.className}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}

export default CaseStudies