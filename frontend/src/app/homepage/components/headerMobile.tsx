"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { linksNavigationHeader } from "@/constants/nav-links-navigation-header";
import Image from "next/image";
import { LogoFastService } from "@/assets";

const HeaderMobile = () => {
  // Creation of states
  const [iconToggle, setIconToggle] = useState(false);
  const [showInfoHeader, setShowInfoHeader] = useState(false);

  //Creating of functions handle
  const handleToggleIcone = () => {
    setIconToggle((prev) => !prev);
    // Toggling the visibility of the menu header
    toggleHeaderMenuVisibility();
  };
  const toggleHeaderMenuVisibility  = () => {
    setShowInfoHeader((prev) => !prev);
  };
  return (
    <header className="lg:hidden bg-white flex max-w-[1280px] w-full flex-col max-lg:py-[1rem] items-end justify-end">
      <div className="w-full flex items-center justify-between px-2">
        <Image
          src={LogoFastService}
          width={100}
          height={30}
          alt="logo da empresa"
        />
        <button
          onClick={handleToggleIcone}
          aria-label="Toggle menu"
          className="bg-transparent text-3xl text-[#fba900] cursor-pointer"
        >
          {iconToggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        className={`${
          showInfoHeader ? "block" : "hidden"
        } bg-amber-500 fixed translate-y-[12rem] translate-x-[-1rem] text-white font-[600] mt-5 flex flex-col gap-4 p-3 rounded-2xl`}
      >
        {linksNavigationHeader.map((link) => (
          <a href={link.id} key={link.id}>
            {link.nome}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default HeaderMobile;
