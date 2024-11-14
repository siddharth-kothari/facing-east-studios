"use client";

import { styles } from "@/app/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@/data";
import { menu, close, logo } from "@/assets";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-8`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            loading="lazy"
            src={logo}
            alt="facing east studios logo"
            className="object-fill text-white"
          />
        </Link>
        <ul className="hidden lg:flex items-center border border-white rounded-2xl py-1 px-1">
          {navLinks.map((navLink, index) => (
            <React.Fragment key={navLink.id}>
              <li className="flex items-center ">
                <Link
                  href={navLink.link}
                  className="font-nunito font-bold text-lg text-white uppercase hover:bg-[#EF3B28] rounded-xl py-2 px-10"
                >
                  {navLink.title}
                </Link>
              </li>
              {index < navLinks.length - 1 && (
                <span className="mx-2 text-white">|</span>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className=" lg:hidden flex flex-1 justify-end items-center">
          <img
            loading="lazy"
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden right-[-100%]" : " block right-0"
            } duration-300 ease-out w-full h-screen bg-primary absolute top-16 z-50`}
          >
            <ul className="list-none h-screen bg-white flex justify-start mt-10 w-full items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
