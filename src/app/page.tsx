import AboutMe from "@/Imports/AboutMe";
import Credibility from "@/Imports/Credibility";
import Hero from "@/Imports/Hero";
import Platforms from "@/Imports/Platforms";
import Events from "@/Imports/Events"
import Media from "@/Imports/Media";
import Contact from "@/Imports/Contact";
import SocialLinks from "@/Imports/SocialLinks";
import Testimonials from "@/Imports/Testimonials";
import Footer from "@/Imports/Footer";
import CaseStudies from "@/Imports/CaseStudies";
import Leadership from "@/Imports/Leadership";

export default function Home() {
  return (
    <main className="flex flex-col lg:mt-50 mt-40 flex-1 font-jost items-center justify-center bg-gray-50 dark:bg-black">
      <Hero
        title="Art. Education. Opportunity. Building brighter futures."
        description="Adetunwase Adenle is an artist, educator, and social entrepreneur using creativity to open new possibilities for children and communities."
      />
      <Credibility />
      <AboutMe />
      <Platforms />
      <Events />
      <CaseStudies />
      <Media />
      <Leadership />
      <Contact />
      <Testimonials />
      <SocialLinks />
      <Footer />
    </main>
  );
}
