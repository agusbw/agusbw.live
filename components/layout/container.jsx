import { twMerge } from "tailwind-merge";

const baseClass = "mx-4 space-y-7 sm:mx-20 lg:w-7/12 lg:mx-auto";

const Container = ({ children, className }) => {
  return <div className={twMerge(baseClass, className)}>{children}</div>;
};
export default Container;
