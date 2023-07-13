import appConfig from "@/config/appConfig";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const socials = [
  {
    name: "Github",
    link: appConfig.socials.Github,
    icon: <AiOutlineGithub />,
  },
  {
    name: "LinkedIn",
    link: appConfig.socials.LinkedIn,
    icon: <AiOutlineLinkedin />,
  },
  {
    name: "Instagram",
    link: appConfig.socials.Instagram,
    icon: <AiOutlineInstagram />,
  },
  {
    name: "Twitter",
    link: appConfig.socials.Twitter,
    icon: <AiOutlineTwitter />,
  },
];

const SocialSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 gap-5 py-16 mx-auto text-center transition-colors duration-300 md:w-6/12 hover:text-highContrast">
      <p className="text-6xl text_gradient">Let&apos;s connect!</p>
      <p className="text-2xl">
        Feel free to reach out through any of my social channels below.
        Let&apos;s connect and create something amazing together!
      </p>
      <div className="flex gap-4">
        {socials.map((social) => (
          <Link
            target="_blank"
            aria-label={`go to ${social.name}`}
            href={social.link}
            key={social.name}
            className="text-4xl transition-colors duration-300 text-lowContrast hover:text-highContrast"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SocialSection;
