import { service_img } from "@/assets";
import { services } from "@/data";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 my-8 mb-20">
      <div className="bg-[#1A1A1A] rounded-[50px] relative">
        <span className="hash-span" id="our-services">
          &nbsp;
        </span>
        <div className="text-center">
          <h1 className="section-title">our services</h1>
        </div>
        <div className="flex flex-col lg:flex-row rounded-lg mt-16 lg:mt-0">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 my-auto lg:p-10">
            <Image
              src={service_img}
              alt="Service Image"
              className="w-[500px] h-[500px] lg:w-full lg:h-full object-cover rounded-3xl lg:rounded-e-[154px] lg:rounded-l-none max-h-[75%] lg:-ml-40 mx-auto"
            />
          </div>

          {/* Services List Section */}
          <div className="w-full lg:w-1/2 text-white p-8 lg:py-12 space-y-8 lg:px-0">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-700 pb-6">
                <h3 className="font-nunito text-2xl font-bold text-red-500 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-white font-nunito text-lg font-bold"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="font-nunito font-bold text-center text-white text-2xl pb-8">
          Looking something for your brand? Contact us now! We will love to
          help.
        </p>
      </div>
    </section>
  );
};

export default Services;
