import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub,faFacebook,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab,faGithub,faFacebook,faTwitter,faInstagram,faLinkedin)

const SocialMedia = () => {
  return (
    <div>
      <FontAwesomeIcon icon={["fab", "facebook"]} />
      <FontAwesomeIcon icon={["fab", "instagram"]} />
      <FontAwesomeIcon icon={["fab", "twitter"]} />
      <FontAwesomeIcon icon={["fab", "github"]} />
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </div>
  );
};

export default SocialMedia;
