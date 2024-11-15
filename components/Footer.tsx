"use client";

import { styles } from "@/app/styles";
import { contact, socials } from "@/data";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className={`${styles.paddingX} max-w-7xl mx-auto`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-white items-end space-y-5 lg:space-x-0">
        {/* Left Section */}
        <div className="space-y-4 self-start">
          <h2 className="font-nunito text-[3rem]">
            Let's
            <br />
            Connect.
          </h2>
          <div className="flex items-center space-x-2 text-base">
            <MapPinIcon className="w-5 h-5 text-[#EF3B28]" />
            <span>{contact.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-base">
            <PhoneIcon className="w-5 h-5 text-[#EF3B28]" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-base">
            <EnvelopeIcon className="w-5 h-5 text-[#EF3B28]" />
            <span>{contact.mail}</span>
          </div>
        </div>

        {/* Useful Links */}
        <div className="self-start sm:pt-20">
          <h3 className="font-bold font-nunito text-lg mb-4">Useful Links</h3>
          <ul className="text-base">
            <li className="mb-6">
              <Link href="/">
                <span className="text-red-500">•</span> Home
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/#about-us">
                <span className="text-red-500">•</span> About Us
              </Link>
            </li>
            <li className="mb-6">
              <Link href="#testimonials">
                <span className="text-red-500">•</span> Testimonials
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/#our-services">
                <span className="text-red-500">•</span> Services
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/#blogs">
                <span className="text-red-500">•</span> Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="self-start lg:pt-20">
          <h3 className="font-bold font-nunito text-lg mb-4">Our Services</h3>
          <ul className="text-base">
            <li className="mb-6">
              <span className="text-red-500">•</span> Strategy
            </li>
            <li className="mb-6">
              <span className="text-red-500">•</span> Production
            </li>
            <li className="mb-6">
              <span className="text-red-500">•</span> Design
            </li>
            <li className="mb-6">
              <span className="text-red-500">•</span> Communications
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="self-start lg:pt-20">
          <h3 className="font-bold font-nunito text-lg mb-4">Newsletter</h3>
          <div className="rounded-t-3xl rounded-b-xl border-4 border-red-500">
            <div className="w-full px-8 my-5 mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-sm outline-none p-1 pb-4 w-full text-white border-b border-[#8C8C8C] placeholder:text-white"
              />
            </div>

            <button className="bg-red-500 w-full py-2 rounded-lg">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-2 mt-16">
            <h3 className="font-bold font-nunito">Follow us on:</h3>
            <span className="flex gap-3 items-center">
              {socials.map((social, index) => (
                <Link href={social.link} key={index} passHref>
                  <Image
                    src={social.image}
                    alt={`Visit our ${social.title} profile`}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#EF3B28] mt-12 rounded-t-full py-3 text-black font-nunito font-bold w-full text-center">
        {year} © Copyright Facing East Studios
      </div>
    </section>
  );
};

export default Footer;
