"use client";

import React from "react";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { UserStar } from "lucide-react";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layouts/Container";

interface HeroProps {
  title: string;
  description: string;
  button?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, description, button }) => {
  // Function to handle button click and scroll to the "About Me" section
  const handleButtonClick = () => {
    const section = document.getElementById("about-me");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="/"
      className="w-full min-h-[640px] relative overflow-hidden bg-black"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-no-repeat grayscale"
        style={{
          backgroundImage:
            "url('https://www.gocycle.ng/images/adetunwase-adenle.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "right center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10"
      />
      <Container>
        {/* Hero Content */}
        <div className="relative z-20 mt-36 mb-20 text-center text-white sm:my-20 md:mt-40 md:mb-20 md:text-left lg:max-w-8xl max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-primaryGold">
            Adetunwase Adenle
          </p>

          <Heading
            as="h1"
            className="font-bold mb-6 animate-fade-in-up text-3xl"
          >
            {title}
          </Heading>

          <Paragraph className="mb-8 tracking-tighter px-2 sm:px-0">
            {description}
          </Paragraph>

          <div className="flex flex-col md:mt-10 sm:flex-row gap-4 justify-center md:justify-start items-center animate-fade-in-up animation-delay-600">
            {button ?
              button
            : <>
                <Button
                  title="know more about me"
                  primaryText="KNOW MORE ABOUT ME"
                  hoverText="KNOW MORE ABOUT ME"
                  icon={UserStar}
                  iconPosition="left"
                  onClick={handleButtonClick}
                  className="gap-2 w-full sm:w-auto"
                  aria-label="Donation button"
                  variant="gold"
                />
              </>
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
