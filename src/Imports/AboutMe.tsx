"use client";
import { useEffect, useState, useRef } from "react";
import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

const TYPING_WORDS = [
  "System.",
  "Leader.",
  "Visionary.",
  "Reformer.",
  "Builder.",
  "Voice.",
];

const PREVIEW_PARAGRAPHS = [
  `Emmanuel Agida is a Nigerian entrepreneur, faith leader, and governance reformer whose work spans capacity development, institutional strengthening, business innovation, and socio-economic transformation across Africa and the global stage.`,
  `He is the Founder and President of Emmanuel Agida International (EAI), a leadership and corporate solutions firm dedicated to building globally competitive leaders, strengthening institutions, and delivering innovative, high-impact solutions to individuals and organisations across diverse sectors.`,
  `He currently serves as Chairman of the Centre for Governance, Economy and Development and Executive Director of the International Institute for Governance and Economy — both platforms at the forefront of policy dialogue, leadership education, and sustainable economic development across the African continent.`,
  `Emmanuel Agida is an accomplished author with several books to his credit, addressing themes of leadership, governance, and the African development agenda.`,
  `In 2019, he founded the Emmanuel Agida Foundation, the philanthropic and social impact arm of the EAI ecosystem. Through targeted scholarships, humanitarian relief to displaced families, and robust youth empowerment initiatives, the Foundation has directly impacted over 3,000 young Africans and families — particularly women, children, and underserved communities.`,
];

const EXTRA_PARAGRAPHS = [
  `As an economic enthusiast and development advocate, Emmanuel's philosophy is anchored on the conviction that 'economic freedom is not a privilege to be inherited, but a destiny to be engineered — and that the transformation of any nation begins not with its resources, but with the quality of its people'. He believes that when minds are shaped with purpose and nations are built with principle, prosperity becomes not an aspiration but an inevitability.`,
  `In 2021, Emmanuel Agida served as Special Assistant to the Osun State Government, making history as the youngest political officeholder in Nigeria at the age of 17 — a milestone that cemented his reputation as a generational voice in African governance and public service.`,
  `Emmanuel Agida is an active member of several distinguished national and international professional bodies, including the World Economic Forum (WEF), Switzerland; the Chartered Institute of Public Relations and Politics, Ghana, where he holds an Honorary Doctoral Fellowship; and Amnesty International, London. He holds a Bachelor's degree in Political Science from the University of Benin.`,
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
    <section id="about-me" className="w-full bg-primatyBlack font-jost pt-5">
      <Container>
        <div className="mt-10">
          <div className="border-b border-white/10 pb-5">
            <Badge title="ABOUT ME" />
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <Heading as="h3" className="lg:text-4xl font-bold">
              Who Is <span className="text-primaryGold">Emmanuel Agida?</span>
            </Heading>

            <Heading as="h3" className="lg:text-4xl font-bold min-h-12">
              A <span className="text-primaryGold italic">{displayed}</span>
              <span className="inline-block w-0.75 h-[1.8rem] bg-primaryGold ml-1 align-middle animate-pulse" />
            </Heading>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-10 mt-8">
            {/* Text */}
            <div className="w-full tracking-tighter lg:w-1/2 space-y-4 font-light">
              {/* Always visible paragraphs */}
              <div ref={textRef} className="space-y-4">
                {PREVIEW_PARAGRAPHS.map((para, i) => (
                  <p key={i} className="text-white/50 text-lg lg:text-lg leading-relaxed text-justify">
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
                    <p key={i} className="text-white/50 text-lg lg:text-lg leading-relaxed text-justify">
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
                src="/emmanuelagida_portrait.svg"
                alt="Emmanuel Agida"
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
                src="/emmanuelagida_portrait.svg"
                alt="Emmanuel Agida"
                className="w-full min-h-70 object-cover object-top"
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
