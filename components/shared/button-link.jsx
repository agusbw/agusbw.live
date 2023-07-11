import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass =
  "bg-primary p-4 border border-bdr hover:scale-90 trasition-transform duration-300 rounded";

const ButtonLink = ({ isExternal, href, className, children, ...props }) => {
  if (isExternal) {
    return (
      <Link
        className={twMerge(baseClass, className)}
        target="_blank"
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className={twMerge(baseClass, className)}
      href={href}
    >
      {children}
    </Link>
  );
};
export default ButtonLink;
