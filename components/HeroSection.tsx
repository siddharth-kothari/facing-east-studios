import { styles } from "@/app/styles";
import { heroImg } from "@/assets";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className={` mt-48 mb-10 `}>
      <div className={`flex items-center text-white min-w-screen mb-5`}>
        <div className={`px-6 md:px-28 relative z-10`}>
          <h1 className="my-8 font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-[800px] ">
            FACE{" "}
            <span className="border-b-4 border-[#EF3B28] inline-block">
              THE DAWN
            </span>
            <br />
            WITH NEW IDEAS
            <br /> AND CLARITY
          </h1>
        </div>
        <div className="w-3/4 absolute right-0 rounded-l-full max-h-[600px] sm:mx-auto md:m-0 md:-translate-x-0  text-center overflow-hidden object-contain object-center">
          <Image src={heroImg} alt="Hero section image" />
        </div>
      </div>
      <div className="w-full mt-44 inline-flex text-center flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between items-center relative z-30 px-6 sm:px-12">
        <p className="font-nunito text-[#EF3B28] font-bold text-sm">
          START YOUR JOURNEY HERE
        </p>
        <div className="bg-[#EF3B28] rounded-[25px] inline-flex gap-1 items-center py-2 px-3">
          <p className="text-white font-nunito font-bold">Follow us on:</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
