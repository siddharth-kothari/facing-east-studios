"use client";

import { robin } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleToggle = () => {
    setShowDetail(!showDetail);
  };

  return (
    <section className="text-white max-w-7xl mx-auto px-4 font-nunito">
      <span className="hash-span" id="about-us">
        &nbsp;
      </span>
      <div className="text-center">
        <h1 className="section-title">About Us</h1>
      </div>
      {/* Main View */}
      {!showDetail && (
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-20">
            <div className="min-h-[300px] bg-white col-span-1"></div>
            <div className="min-h-[300px] text-2xl col-span-1 md:col-span-2 pr-8 text-white font-medium">
              <p>
                Facing East Studios is a creative force, driven by the belief
                that every sunrise brings with it fresh opportunities.
              </p>
              <br />
              <p>
                With a young but seasoned team, we specialise in visual
                storytelling that pushes boundaries and inspires action.
              </p>
              <br />
              <p>
                From concept to creation, we work with brands to make their mark
                in the world.
              </p>
              <br />
              <button
                onClick={handleToggle}
                className="mt-8 text-red-500 hover:text-red-700"
              >
                WANT TO KNOW WHO'S THAT BIRD?{" "}
                <span className="underline">CLICK HERE</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail View */}
      {showDetail && (
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-20">
            <div className="min-h-[300px] col-span-1">
              <p className="font-bold text-xl">Meet Robin - The Early Riser</p>
              <p className="font-light text-sm">
                One who symbolises our brand perfectly.
              </p>
              <Image
                src={robin}
                alt="photo of robin"
                className="rounded-e-[97px] mt-12 h-52 object-cover object-top"
              />
            </div>
            <div className="min-h-[300px] text-2xl col-span-1 pr-8 text-white font-medium">
              <p>
                Robins are among the earliest risers in the avian world,
                beginning their song long before the sun is fully visible. Known
                for their proactive and adaptable nature, they become a perfect
                metaphor for innovation and leading with vision.
              </p>
              <br />
              <p>
                We chose the Robin because it reflects who we are—a young, bold,
                and forward-thinking company, always ready to face the dawn with
                new ideas and clarity. Like the Robin, we rise early, bringing
                fresh energy to everything we create.
              </p>
              <button
                onClick={handleToggle}
                className="mt-8 text-red-500 underline hover:text-red-700"
              >
                GO BACK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
