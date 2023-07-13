import TextLink from "../shared/text-link";
import MobileNavigation from "./mobile-navigation";
import SiteLogo from "../shared/site-logo";

const navMenu = ["About", "Projects", "Blog"];

const TopNavigation = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 hidden border-b sm:block backdrop-blur-lg border-b-bdr sm:mx-20 sm:py-3 lg:mx-56 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <SiteLogo />
            <TextLink href={"/"}>Home</TextLink>
          </div>
          <div className="flex gap-2">
            {navMenu.map((menu, i) => {
              return (
                <>
                  <TextLink
                    key={menu}
                    href={"/" + menu.toLowerCase()}
                  >
                    {menu}
                  </TextLink>
                  {i !== navMenu.length - 1 && <span>/</span>}
                </>
              );
            })}
          </div>
        </div>
      </nav>
      <MobileNavigation navMenu={navMenu} />
    </>
  );
};
export default TopNavigation;
