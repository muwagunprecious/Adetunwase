import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
// import Paragraph from "@/components/ui/Paragraph";

const AboutMe = () => {
  return (
    <section id="about-me" className="w-full bg-primatyBlack font-jost pt-5">
      {/* Header */}
      <Container>
        <div className="mt-10">
          <div className="border-b border-white/10 pb-5">
            <Badge title="ABOUT ME" />
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <Heading
              as="h3"
              className="lg:text-4xl font-bold animate-fade-in-up"
            >
              Who Is <span className="text-primaryGold">Emmanuel Agida?</span>
            </Heading>
            <Heading
              as="h3"
              className="lg:text-4xl font-bold animate-fade-in-up"
            >
              A{""}
              <span className="text-primaryGold"> systemic leader</span>
            </Heading>

            {/* <Paragraph className="mb-10 sm:px-0 lg:w-3/5">
              Half a decade of strategic leadership marked by measurable
              outcomes, cross-sector influence, and a consistent track record of
              delivering results at scale.
            </Paragraph> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
