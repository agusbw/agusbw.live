"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass = "";

const TOClink = ({ children, className, headingId, href, ...props }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    const topOfElements = document.getElementById(headingId).offsetTop - 105;
    window.scroll({
      top: topOfElements,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href}
      className={twMerge(baseClass, className)}
      onClick={(e) => handleOnClick(e)}
      {...props}
    >
      {children}
    </Link>
  );
};
export default TOClink;
