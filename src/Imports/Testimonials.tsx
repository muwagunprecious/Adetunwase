"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import { testimonialList } from "@/constants/testimonials";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-amber-50 font-jost pt-5">
      <Container>
        <div className="my-10 w-full flex flex-col lg:flex-row-reverse">
          <div className="flex flex-col lg:items-end w-full lg:w-1/3">
            <Badge title="TESTIMONIALS" className="text-primaryBlack/20" />
            <div className="flex flex-col justify-between my-6 gap-4 lg:text-right">
              <Heading
                as="h3"
                className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full"
              >
                Trusted by Leaders.
                <span className="text-primaryGold italic">
                  {" "}
                  Respected by Institutions
                </span>
              </Heading>
              <div className="w-full text-primaryBlack/30 text-xl tracking-tighter">
                Endorsements from respected figures and organizations reflecting
                a consistent standard of excellence, integrity, and impact.
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-row">
            <div className="w-full lg:w-1/2 px-4">
              <TestimonialSlider testimonials={testimonialList} />
            </div>
            <div className="hidden lg:block w-1/2 px-4">
              <TestimonialSlider
                testimonials={testimonialList}
                direction="reverse"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
