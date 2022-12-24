import React from "react";
import StyledSocialIcons from "./StyledSocialIcons";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {ImGithub} from "react-icons/im";
import Link from "next/link";

const SocialIcons = ({className}) => {
  return (
    <StyledSocialIcons className={className}>
      <Link
        href="https://www.facebook.com/profile.php?id=100008890392675"
        className="link"
      >
        <FaFacebookF size={16} />
      </Link>
      <Link href="https://twitter.com/SajibAh27935466" className="link">
        <AiOutlineTwitter size={20} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sajib-ahmed-70a906238/"
        className="link"
      >
        <FaLinkedinIn size={20} />
      </Link>
      <Link href="https://github.com/sajib925" className="link">
        <ImGithub size={20} />
      </Link>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
