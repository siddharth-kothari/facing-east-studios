"use client";

import { styles } from "@/app/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@/data";
import { close, hamburger_icon, fes_logo, line } from "@/assets";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-8`}>
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            loading="lazy"
            src={fes_logo}
            alt="facing east studios logo"
            className="max-w-[250px] sm:max-w-[300px]"
          />
        </Link>
        <ul className="hidden 2xl:flex items-center border border-white rounded-2xl py-1 px-1">
          {navLinks.map((navLink, index) => (
            <React.Fragment key={navLink.id}>
              <li className="flex items-center ">
                <Link
                  href={navLink.link}
                  className="font-nunito font-bold text-md text-white uppercase hover:bg-[#EF3B28] rounded-xl py-2 px-10"
                >
                  {navLink.title}
                </Link>
              </li>
              {index < navLinks.length - 1 && (
                <Image src={line} alt="line" className="mx-2" />
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className=" 2xl:hidden flex flex-1 justify-end items-center">
          <Image
            loading="lazy"
            src={toggle ? close : hamburger_icon}
            alt="menu"
            className="w-[28px] h-[28px] z-20 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "top-[-110%]" : " block top-16"
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
