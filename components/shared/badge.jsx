import { twMerge } from "tailwind-merge";

const baseClass =
  "py-0.5 px-3 text-sm rounded-full border text-center border-bdr bg-base";

const Badge = ({ children, className }) => {
  return <span className={twMerge(baseClass, className)}>{children}</span>;
};
export default Badge;
