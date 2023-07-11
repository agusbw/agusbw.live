import Image from "next/image";
import ButtonLink from "../shared/button-link";
import profilePic from "/assets/images/profile-picture.png";

const ProfilePicture = () => {
  return (
    <Image
      width={150}
      height={150}
      src={profilePic}
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
      <h1 className="inline-block text_gradient max-w-[650px] px-4 sm:px-0 bg-gradient-to-r">
        Building modern and user-friendly Front-end Experience.
      </h1>
      <ButtonLink
        href={"/about"}
        isExternal={false}
        className="mt-4 w-60"
      >
        More about me...
      </ButtonLink>
    </div>
  );
};
export default Hero;
