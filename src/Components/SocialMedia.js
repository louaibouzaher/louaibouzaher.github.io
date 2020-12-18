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
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub, faFacebook, faTwitter, faInstagram, faLinkedin);

const SocialMedia = () => {
  return (
    <div className="flex max-w-sm m-5 mt-7 flex-row container ">
      <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" className="m-1.5 cursor-pointer smi hover:text-gray-500" />
      <FontAwesomeIcon icon={["fab", "instagram"]} size="2x"className="m-1.5 cursor-pointer smi hover:text-gray-500"/>
      <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" className="m-1.5 cursor-pointer  smi hover:text-gray-500" />
      <FontAwesomeIcon icon={["fab", "github"]} size="2x" className="m-1.5 cursor-pointer smi hover:text-gray-500" />
      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" className="m-1.5 cursor-pointer smi hover:text-gray-500" />
    </div>
  );
};

export default SocialMedia;
