"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 45) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed top-0 bg-[#F68800] h-6 w-full flex items-center justify-center text-center py-4 px-4 z-[100]"
          : "bg-[#F68800] h-6 w-full flex items-center justify-center text-center py-4 px-4"
      }
    >
      <a
        className="flex flex-row items-center"
        href="mailto:brian@competitiveedgedumpsters.com"
      >
        <AiOutlineMail className="text-white sm:flex hidden hover:text-white/70 text-xl mr-3" />{" "}
        <p className="text-white hover:text-white/70 hidden sm:flex mr-10">
          info@competitiveedgedigital.com
        </p>
      </a>
      <a href="tel:+18134998379" className="flex items-center">
        <p className="text-white mr-3">Call Today</p>
        <AiFillPhone className="text-white text-xl flex mr-2" />{" "}
        <p className="text-white"> (813) 499-8379 </p>
      </a>
    </div>
  );
};

export default Header;