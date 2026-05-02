"use client";

import Image from "next/image";
import { TestimonialProps } from "@/types/testimonials";

type TestimonialsProps = {
  testimonials: TestimonialProps[];
  direction?: "normal" | "reverse";
};

const TestimonialSlider: React.FC<TestimonialsProps> = ({
  testimonials,
  direction = "normal",
}) => {
  return (
    <section className="w-full overflow-hidden relative h-160">
      {/* Top fade overlay */}
      <div className="absolute top-0 left-0 w-full h-48 z-10 pointer-events-none bg-linear-to-b from-amber-50 to-transparent" />

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-48 z-10 pointer-events-none bg-linear-to-t from-amber-50 to-transparent" />

      {/* Sliding track */}
      <div
        className="flex flex-col w-full animate-vertical-slide"
        style={{ animationDirection: direction }}
      >
        {testimonials.map(testimonial => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center gap-4 rounded-lg justify-center my-1 p-6 shrink-0 text-center text-lg"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}
          >
            <p className="text-primaryBlack/30 font-normal tracking-tighter">
              {testimonial.quote}
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                width={48}
                height={48}
                className="h-12 w-12 object-cover rounded-full mx-4"
              />
              <div className="flex flex-col items-center">
                <div className="font-medium text-primaryBlack">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primaryBlack/50">
                  {testimonial.affiliation}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
