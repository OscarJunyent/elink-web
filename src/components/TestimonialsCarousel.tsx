
import React from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  frase: string;
  autor: string;
}

const chunk = <T,>(array: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );

const TestimonialsCarousel = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  // Groups of 3 testimonials per slide
  const slides = chunk(testimonials, 3);

  return (
    <section className="container py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <Carousel>
          <CarouselContent>
            {slides.map((group, idx) => (
              <CarouselItem key={idx}>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  {group.map((testimonial, subIdx) => (
                    <div
                      key={subIdx}
                      className="bg-white rounded-2xl shadow-circular p-8 flex-1 flex flex-col items-center min-w-0"
                    >
                      <Quote size={32} className="mb-2 text-accent opacity-70" />
                      <p className="text-lg md:text-xl text-dark font-medium mb-2 italic text-center">
                        &quot;{testimonial.frase}&quot;
                      </p>
                      <p className="text-accent mt-2 text-sm md:text-base text-center">
                        — {testimonial.autor}
                      </p>
                    </div>
                  ))}
                  {/* Ensure three columns for layout consistency */}
                  {group.length < 3 &&
                    Array.from({ length: 3 - group.length }).map((_, emptyIdx) => (
                      <div
                        key={`empty-${emptyIdx}`}
                        className="flex-1 min-w-0"
                        aria-hidden="true"
                      />
                    ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
