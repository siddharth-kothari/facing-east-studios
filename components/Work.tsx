"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { works } from "@/data";
import Image from "next/image";
import "@/app/globals.css";

const Work = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 min-h-screen">
      <span className="hash-span" id="our-work">
        &nbsp;
      </span>
      <div className="text-center mb-16">
        <h1 className="section-title">Our Work</h1>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={1}
        slidesPerView={3}
        centeredSlides
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          // When screen width is >= 320px (mobile)
          320: {
            slidesPerView: 1, // Show 1 slide
          },
          // When screen width is >= 480px (small tablets)
          540: {
            slidesPerView: 1.5, // Show 1.5 slides
          },
          // When screen width is >= 768px (tablets)
          768: {
            slidesPerView: 2, // Show 2 slides
          },
          // When screen width is >= 1024px (desktops)
          1024: {
            slidesPerView: 3, // Show 3 slides
          },
        }}
        className="rounded-carousel mb-16"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative mx-auto flex items-center justify-center bg-cover bg-center rounded-[200px] overflow-hidden group"
              style={{ height: "550px", maxWidth: "300px" }}
            >
              <Image
                src={work.image}
                alt={work.text}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="font-nunito font-medium text-white text-4xl">
                  {work.text} <span className="!font-black">{work.brand}</span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="text-center text-white mt-4 mb-16">
        From concept to creation, we work with brands to make their mark in the
        world.
      </p>
    </section>
  );
};

export default Work;
