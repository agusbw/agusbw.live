import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass =
  "transition-colors duration-100 text-lowContrast hover:text-highContrast";

const TextLink = ({ href, children, className, ...props }) => {
  return (
    <Link
      className={twMerge(baseClass, className)}
      href={href}
    >
      {children}
    </Link>
  );
};
export default TextLink;
