"use client";

import TextLink from "../shared/text-link";
import { useState } from "react";

const HamburgerMenu = ({ handleNavToggle }) => {
  return (
    <button
      className="p-3 rounded-md focus:outline outline-bdr"
      onClick={handleNavToggle}
    >
      <div className="flex flex-col gap-1">
        {Array(3)
          .fill(undefined)
          .map((v, i) => (
            <span
              key={i}
              className="block after:h-[2px] rounded-lg after:block after:w-7 bg-lowContrast cursor-pointer"
            ></span>
          ))}
      </div>
    </button>
  );
};

const MobileNavigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavigationOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 py-2 mx-8 border-b sm:hidden backdrop-blur-lg border-b-bdr">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full cursor-pointer bg-primary text-md border-bdr">
            <p>B W</p>
          </div>
          <TextLink href={"/"}>Get in touch</TextLink>
        </div>
        <div className="relative">
          <HamburgerMenu handleNavToggle={handleNavToggle} />
          {isNavigationOpen && (
            <div className="absolute right-0 flex flex-col items-end py-2 mt-2 border rounded-md ps-16 pe-2 border-bdr bg-base">
              <TextLink href={"/about"}>About</TextLink>
              <TextLink href={"/about"}>Projects</TextLink>
              <TextLink href={"/about"}>Blog</TextLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
