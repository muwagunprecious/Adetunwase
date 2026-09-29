"use client";
import { useEffect, useState, useRef } from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

const TYPING_WORDS = [
  "Artist.",
  "Educator.",
  "Innovator.",
  "Social Entrepreneur.",
  "Change-maker.",
];

const PREVIEW_PARAGRAPHS = [
  `Adetunwase Adenle is a Nigerian art educator, visual artist, and social entrepreneur. His work uses creativity, education, and technology to expand opportunities for children and young people in underserved communities.`,
  `He founded Slum Art Foundation, a Lagos-based nonprofit that supports children through art workshops, mentorship, literacy, and skills training. Its community work includes the Pet Bottle School in Ijora-Badia, built with recycled plastic bottles.`,
  `A four-time Guinness World Records holder, Adenle has helped bring large-scale creative and learning projects to life. His work connects art with practical education, environmental awareness, and community development.`,
  `He also works in environmental innovation with GoCycle, helping build systems that turn electronic waste into recoverable resources and create opportunities for informal collectors.`,
];

const EXTRA_PARAGRAPHS = [
  `Slum Art Foundation was founded to help children in underserved communities discover their creative abilities and build confidence through sustained learning and mentorship.`,
  `Adenle studied Fine and Applied Art at the Federal College of Education (Technical), Akoka, Lagos. His work has included community exhibitions and creative projects that bring young people together around art and social issues.`,
  `His recent work also explores digital storytelling and environmental innovation, including initiatives that introduce children to animation and emerging creative technologies.`,
];

const AboutMe = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [textHeight, setTextHeight] = useState<number | undefined>(undefined);
  const textRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);
  const [extraHeight, setExtraHeight] = useState(0);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex(i => (i + 1) % TYPING_WORDS.length);
        }
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  // Measure base text height (preview only)
  useEffect(() => {
    if (!textRef.current) return;
    const measure = () => {
      if (textRef.current) setTextHeight(textRef.current.offsetHeight);
    };
    const init = setTimeout(measure, 50);
    const observer = new ResizeObserver(measure);
    observer.observe(textRef.current);
    return () => { clearTimeout(init); observer.disconnect(); };
  }, []);

  // Measure extra content natural height once mounted
  useEffect(() => {
    if (!extraRef.current) return;
    const measure = () => {
      if (extraRef.current) setExtraHeight(extraRef.current.scrollHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(extraRef.current);
    return () => observer.disconnect();
  }, []);

  const imageHeight = textHeight
    ? expanded
      ? textHeight + extraHeight
      : textHeight
    : undefined;

  return (
    <section id="about-me" className="w-full bg-amber-50 font-jost pt-5">
      <Container>
        <div className="my-10">
          <div className="border-b border-black/10 pb-5">
            <Badge title="ABOUT ME" className="text-primaryBlack" />
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <Heading as="h3" className="lg:text-4xl font-bold text-primaryBlack">
              Who Is <span className="text-primaryGold">Adetunwase Adenle?</span>
            </Heading>

            <Heading as="h3" className="lg:text-4xl font-bold min-h-12 text-primaryBlack">
              A <span className="text-primaryGold italic">{displayed}</span>
              <span className="inline-block w-0.75 h-[1.8rem] bg-primaryGold ml-1 align-middle animate-pulse" />
            </Heading>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-10 mt-8">
            {/* Text */}
            <div className="w-full tracking-tighter lg:w-1/2 space-y-4 font-normal">
              {/* Always visible paragraphs */}
              <div ref={textRef} className="space-y-4">
                {PREVIEW_PARAGRAPHS.map((para, i) => (
                  <p key={i} className="text-primaryBlack/70 text-lg lg:text-lg leading-relaxed text-justify">
                    {para}
                  </p>
                ))}
              </div>

              {/* Expandable paragraphs */}
              <div
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ height: expanded ? `${extraHeight}px` : "0px", opacity: expanded ? 1 : 0 }}
              >
                <div ref={extraRef} className="space-y-4 pt-4">
                  {EXTRA_PARAGRAPHS.map((para, i) => (
                    <p key={i} className="text-primaryBlack/70 text-lg lg:text-lg leading-relaxed text-justify">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setExpanded(prev => !prev)}
                className="text-primaryGold text-base font-bold underline underline-offset-2 cursor-pointer transition-opacity hover:opacity-70"
              >
                {expanded ? "Read Less..." : "Read More..."}
              </button>
            </div>

            {/* Image — desktop, mirrors text height */}
            <div
              className="hidden lg:block w-full lg:w-1/2 shrink-0 overflow-hidden transition-[height] duration-700 ease-in-out"
              style={{ height: imageHeight ? `${imageHeight}px` : "auto" }}
            >
              <Image
                src="https://cdn.guardian.ng/wp-content/uploads/2019/03/My-Freedom-Day.jpg"
                alt="Adetunwase Adenle with Slum Art children at the My Freedom Day event"
                className="w-full h-full grayscale object-cover object-top"
                width={400}
                height={400}
                priority
                draggable={false}
              />
            </div>

            {/* Image — mobile */}
            <div className="block lg:hidden w-full">
              <Image
                src="https://cdn.guardian.ng/wp-content/uploads/2019/03/My-Freedom-Day.jpg"
                alt="Adetunwase Adenle with Slum Art children at the My Freedom Day event"
                className="w-full min-h-70 grayscale object-cover object-top"
                width={400}
                height={400}
                priority
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
