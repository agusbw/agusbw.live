import TextLink from "../shared/text-link";
import MobileNavigation from "./mobile-navigation";

const TopNavigation = () => {
  return (
    <>
      <nav className="sticky top-0 hidden border-b sm:block backdrop-blur-lg border-b-bdr sm:mx-20 sm:py-3 lg:mx-56 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full cursor-pointer bg-primary text-md border-bdr">
              <p>B W</p>
            </div>
            <TextLink href={"/"}>Get in touch</TextLink>
          </div>
          <div className="flex gap-2">
            <TextLink href={"/"}>About</TextLink>
            <span>/</span>
            <TextLink href={"/"}>Projects</TextLink>
            <span>/</span>
            <TextLink href={"/"}>Blog</TextLink>
          </div>
        </div>
      </nav>
      <MobileNavigation />
    </>
  );
};
export default TopNavigation;
