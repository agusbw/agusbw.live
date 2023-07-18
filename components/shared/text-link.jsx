import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass =
  "transition-colors duration-100 text-lowContrast hover:text-highContrast";

const TextLink = ({ href, children, className, isExternal, ...props }) => {
  if (isExternal) {
    return (
      <Link
        className={twMerge(baseClass, className)}
        target="_blank"
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className={twMerge(baseClass, className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
export default TextLink;
