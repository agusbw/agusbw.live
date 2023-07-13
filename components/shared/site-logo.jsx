import Link from "next/link";

const SiteLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full cursor-pointer bg-primary text-md border-bdr">
        <>B W</>
      </div>
    </Link>
  );
};
export default SiteLogo;
