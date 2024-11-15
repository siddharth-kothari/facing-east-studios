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
          className="flex items-center gap-2 z-50"
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
            className="w-[28px] h-[28px] z-50 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "top-[-110%]" : " block top-0"
            } duration-300 ease-out right-0 w-full h-screen bg-primary absolute z-30`}
          >
            <ul className="list-none h-screen bg-black text-white pt-24 flex justify-start w-full flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-nunito text-[16px] font-medium cursor-pointer hover:bg-[#EF3B28] rounded-xl py-2 px-10`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link href={`${link.link}`}>{link.title}</Link>
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
