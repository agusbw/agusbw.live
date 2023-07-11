import Link from "next/link";
import { twMerge } from "tailwind-merge";

const TextLink = ({ href, children, className }) => {
  return (
    <Link
      className={twMerge(
        "transition-colors duration-100 text-lowContrast hover:text-highContrast",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
export default TextLink;
