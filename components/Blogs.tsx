import { blog } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-10">
      <div className="bg-[#EF3B28] rounded-[50px] ">
        <span className="hash-span" id="blogs">
          &nbsp;
        </span>
        <div className="text-center">
          <h1 className="section-title border-black">BLOG</h1>
        </div>
        <div className="h-auto mx-auto grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 md:space-x-10 px-2 py-12 lg:p-20 lg:pb-0 lg:pt-12">
          <div className="flex flex-col space-y-10 font-nunito">
            <div className="bg-white rounded-[30px] p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div>
                <p className="text-sm">Creative | Tips</p>
                <h3 className="text-xl lg:text-3xl w-full lg:max-w-[70%] font-semibold mt-4 font-nunito lg:!leading-[2.5rem]">
                  Top 10 Trends in Graphic Design
                </h3>
                <p className="text-gray-600 text-base w-full lg:max-w-[70%] font-thin mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <button className="mt-6 bg-black text-white px-4 py-2 rounded-full self-start hover:bg-gray-800">
                Read More
              </button>
            </div>

            <div className="bg-white rounded-[30px] p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div>
                <p className="font-nunito text-sm">News | Brands</p>
                <h3 className="text-xl lg:text-3xl w-full lg:max-w-[70%] font-semibold mt-4 font-nunito lg:!leading-[2.5rem]">
                  Recent rebranding of your most favourite brand
                </h3>
                <p className="text-gray-600  text-base w-full lg:max-w-[70%] font-thin mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <button className="mt-6 bg-black text-white px-4 py-2 rounded-full self-start hover:bg-gray-800">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[30px] h-full mb-8 md:mb-0">
            <Image src={blog} alt="blog" />
            <div className="py-5 px-10 md:pb-10">
              <p className="font-nunito font-thin">Business | Insights</p>
              <h3 className="text-xl lg:text-3xl w-full font-semibold mt-4 font-nunito mb-3">
                How brands are shaping consumer mindsets
              </h3>
              <p className="font-extralight  text-base w-full lg:max-w-[70%] text-[#343434] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <Link
                href="/"
                className="bg-black font-nunito font-medium rounded-full text-white py-2 px-6"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5 pb-10 md:pt-0 lg:py-10 ">
          <Link
            href="/"
            className="bg-black font-nunito font-medium rounded-full text-white py-2 px-8"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
