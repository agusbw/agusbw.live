"use client";

import TextLink from "../shared/text-link";
import { useState } from "react";
import SiteLogo from "../shared/site-logo";

const HamburgerMenu = ({ handleNavToggle }) => {
  return (
    <button
      className="p-3 rounded-md focus:outline outline-bdr"
      aria-label="mobile navigation toggle"
      onClick={handleNavToggle}
    >
      <div className="flex flex-col gap-1">
        {Array(3)
          .fill([1, 2, 3])
          .map((v) => (
            <span
              key={v}
              className="block after:h-[2px] rounded-lg after:block after:w-7 bg-lowContrast cursor-pointer"
            ></span>
          ))}
      </div>
    </button>
  );
};

const MobileNavigation = ({ navMenu }) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavigationOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 py-2 mx-4 border-b sm:hidden backdrop-blur-lg border-b-bdr">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <SiteLogo />
          <TextLink href={"/"}>Home</TextLink>
        </div>
        <div className="relative">
          <HamburgerMenu handleNavToggle={handleNavToggle} />
          {isNavigationOpen && (
            <div className="absolute right-0 flex flex-col items-end py-2 mt-2 border rounded-md ps-16 pe-2 border-bdr bg-base">
              {navMenu.map((menu) => (
                <TextLink
                  key={menu}
                  href={"/" + menu.toLowerCase()}
                >
                  {menu}
                </TextLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
