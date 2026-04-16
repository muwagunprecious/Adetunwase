"use client";

import React from "react";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { UserStar } from "lucide-react";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layouts/Container";
import Image from "next/image";
import LogoSlider from "@/components/ui/LogoSlider";

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
      style={{ backgroundImage: "url('/hero_bg.svg')" }}
      className="w-full h-full relative bg-cover bg-center bg-no-repeat"
    >
      <Container>
        {/* Hero Content */}
        <div className="relative z-20 my-20 text-center md:text-left text-white lg:max-w-8xl max-w-4xl md:mt-40">
          <Image
            src="/hero_logo.svg"
            alt="Hero Logo"
            priority
            width={40}
            height={40}
            draggable={false}
            className="w-3xl mb-5"
          />

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

      {/* Logo Slider */}
      <LogoSlider />
    </section>
  );
};

export default Hero;
