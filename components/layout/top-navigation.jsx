import TextLink from "../shared/text-link";

const TopNavigation = () => {
  return (
    <nav className="lg:px-56 lg:py-8">
      <div className="flex justify-between">
        <div className="flex items-center justify-center w-8 h-8 p-8 border-2 rounded-full text-md border-bdr">
          <p>Email</p>
        </div>
        <div className="flex gap-2">
          <TextLink href={"/"}>Home</TextLink>
          <span>/</span>
          <TextLink href={"/"}>About</TextLink>
          <span>/</span>
          <TextLink href={"/"}>Projects</TextLink>
          <span>/</span>
          <TextLink href={"/"}>Blog</TextLink>
        </div>
      </div>
    </nav>
  );
};
export default TopNavigation;
