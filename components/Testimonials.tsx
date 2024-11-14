import { testimonials } from "@/data";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { background2 } from "@/assets";

const Testimonials = () => {
  return (
    <section id="" className="max-w-7xl mx-auto px-4">
      <span className="hash-span" id="testimonials">
        &nbsp;
      </span>
      <div className="text-center">
        <h1 className="section-title">CLIENT TESTIMONIALS</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-28">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
