import React from "react";
import { star } from "@/assets";
import Image from "next/image";

interface Testimonial {
  image: string;
  name: string;
  designation: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: React.FC<Testimonial> = ({
  image,
  name,
  designation,
  rating,
  testimonial,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg relative mb-16">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-30 h-30 rounded-full mb-4 mx-auto -mt-24"
      />
      <div className="flex flex-col gap-1 justify-center items-center mb-12 mt-8">
        <span className="testimonial-client-name">{name}</span>
        <span className="testimonial-client-designation">{designation}</span>
      </div>
      <div className="flex items-center">
        {Array.from({ length: rating }, (_, i) => (
          <Image
            src={star}
            alt={`${rating} stars`}
            key={i}
            className="h-5 w-5 text-yellow-500"
          />
        ))}
      </div>
      <p className="testimonial-client-designation mt-2">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
