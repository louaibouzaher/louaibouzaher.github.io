import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faBehance
);

const SocialMedia = () => {
  const fb = "https://www.facebook.com/bouzahermohamedlouai/";
  const insta = "http://instagram.com/louaibouzaher";
  const linkedin =
    "https://www.linkedin.com/in/mohamed-louai-bouzaher-bb86201b0/";
  const github = "https://github.com/louaibouzaher";
  const twitter = "https://twitter.com/louaibouzaher";
  const behance = "https://www.behance.net/louaibouzaher";
  return (
    <div className="flex max-w-sm m-5 mt-7 flex-row container ">
      <a href={fb} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          size="2x"
          className="m-1.5 cursor-pointer smi hover:text-white"
        />
      </a>
      <a href={insta} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          size="2x"
          className="m-1.5 cursor-pointer smi hover:text-white"
        />
      </a>
      <a href={twitter} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          size="2x"
          className="m-1.5 cursor-pointer  smi hover:text-white"
        />
      </a>
      <a href={github} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "github"]}
          size="2x"
          className="m-1.5 cursor-pointer smi hover:text-white"
        />
      </a>
      <a href={linkedin} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          className="m-1.5 cursor-pointer smi hover:text-white"
        />
      </a>
      <a href={behance} target="_blank">
        <FontAwesomeIcon
          icon={["fab", "behance"]}
          size="2x"
          className="m-1.5 cursor-pointer smi hover:text-white"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
