"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass = "";

const ScrollableLink = ({ children, className, id, href, ...props }) => {
  const handleOnClick = (e) => {
    e.preventDefault();

    const topOfElements = document.getElementById(id).offsetTop - 105;
    window.scroll({
      top: topOfElements,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={href}
      id={id}
      className={twMerge(baseClass, className)}
      onClick={(e) => handleOnClick(e)}
      {...props}
    >
      {children}
    </Link>
  );
};
export default ScrollableLink;
