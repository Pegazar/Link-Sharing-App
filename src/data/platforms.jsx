import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  GithubIcon,
  LinkedinIcon,
} from "../assets/svg/svgicons";

export const platforms = [
  { id: "github", name: "GitHub", color: "bg-gray-800", Icon: GithubIcon },
  { id: "youtube", name: "YouTube", color: "bg-red-600", Icon: YoutubeIcon },
  {
    id: "linkedin",
    name: "LinkedIn",
    color: "bg-blue-600",
    Icon: LinkedinIcon,
  },
  { id: "twitter", name: "Twitter", color: "bg-blue-400", Icon: TwitterIcon },
  {
    id: "facebook",
    name: "Facebook",
    color: "bg-blue-800",
    Icon: FacebookIcon,
  },
];

export const platformDomains = {
  twitter: "twitter.com",
  facebook: "facebook.com",
  github: "github.com",
  linkedin: "linkedin.com",
  youtube: "youtube.com",
};

export default platforms;



