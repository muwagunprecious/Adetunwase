"use client";

import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialMediaLink from "@/components/ui/SocialMediaLink";

const SocialLinks = () => {
  return (
    <div className="w-full flex font-jost flex-row items-center bg-gray-50">
      <SocialMediaLink
        href="https://www.facebook.com/SlumArtFoundation/"
        icon={FaFacebook}
        label="Facebook"
      />
      <SocialMediaLink
        href="https://x.com/adetunwase360"
        icon={FaXTwitter}
        label="Twitter"
      />
      <SocialMediaLink
        href="https://ng.linkedin.com/in/adetunwase-adenle-7359791b"
        icon={FaLinkedinIn}
        label="LinkedIn"
      />
      <SocialMediaLink
        href="https://www.instagram.com/adetunwase360/"
        icon={FaInstagram}
        label="Instagram"
      />
    </div>
  );
};

export default SocialLinks;
