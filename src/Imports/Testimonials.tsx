"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-gray-50 font-jost pt-5">
      <Container>
        <div className="my-10 w-full flex flex-col lg:flex-row-reverse">
          <div className="flex flex-col lg:items-end w-full lg:w-1/3">
            <Badge title="IN THE NEWS" className="text-primaryBlack/20" />
            <div className="flex flex-col justify-between my-6 gap-4 lg:text-right">
              <Heading
                as="h3"
                className="lg:text-4xl font-bold text-primaryBlack tracking-tighter w-full"
              >
                Stories of creative impact.
                <span className="text-primaryGold italic">
                  {" "}
                  Featured in the press
                </span>
              </Heading>
              <div className="w-full text-primaryBlack/30 text-md tracking-tighter font-normal">
                Stories and coverage of creative learning, community projects,
                and environmental innovation.
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-row">
            <div className="w-full px-4">
              <p className="text-primaryBlack/60 text-lg leading-relaxed">
                Adetunwase Adenle&apos;s work has been covered by The Guardian,
                including Slum Art&apos;s children&apos;s exhibitions and community
                education initiatives.
              </p>
              <a
                className="mt-5 inline-block text-primaryGold underline"
                href="https://guardian.ng/art/when-a-child-picks-up-a-brush-a-community-begins-to-heal/"
                target="_blank"
                rel="noreferrer"
              >
                Read the Guardian feature
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
