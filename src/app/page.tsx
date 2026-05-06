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

export default function Home() {
  return (
    <main className="flex flex-col lg:mt-50 mt-40 flex-1 font-jost items-center justify-center bg-zinc-50 dark:bg-black">
      <Hero
        title="Raising Leaders. Transforming Minds. Driving Impact."
        description="You can love people without leading them, but you can't lead people without loving them."
      />
      <Credibility />
      <AboutMe />
      <Platforms />
      <Events />
      <Media />
      <Contact />
      <Testimonials/>
      <SocialLinks />
      <Footer />
      {/* Add your Compoent Here */}
    </main>
  );
}

// add a hover-to-tilt effect to the image in the about me section.