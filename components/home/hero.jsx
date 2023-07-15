import Image from "next/image";
import ButtonLink from "@/components/shared/button-link";

const ProfilePicture = () => {
  return (
    <Image
      width={150}
      height={150}
      src={"/images/profile-picture.webp"}
      className="rounded-full"
      alt="profile picture"
    />
  );
  ``;
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-24 text-center gap-7">
      <ProfilePicture />
      <p>
        Hi, I&apos;m Bewe 👋🏻 <br /> Front-end Developer
      </p>
      <p className="inline-block text_gradient bg-300% animate-gradient max-w-[650px] px-4 sm:px-0 bg-gradient-to-r text-4xl md:text-6xl">
        Building modern and user-friendly Front-end Experience.
      </p>
      <ButtonLink
        href={"/about"}
        className="mt-4 w-60"
      >
        More about me...
      </ButtonLink>
    </div>
  );
};
export default Hero;
