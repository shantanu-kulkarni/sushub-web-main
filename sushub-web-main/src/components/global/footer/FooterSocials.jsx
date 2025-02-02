import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { footerSocialsLabel, footerSocials } from "./FooterConstants";

const FooterSocials = () => {
  return (
    <div className="p-5 w-full md:w-full lg:w-full xl:w-3/12 2xl:w-3/12">
      <div className="text-xs text-center md:text-center lg:text-center xl:text-start uppercase text-gray-400 font-medium mb-6">
        {footerSocialsLabel}
      </div>
      <div className="flex items-center justify-center md:justify-center lg:justify-center xl:justify-start">
        {footerSocials.map((social, index) => {
          return (
            <a
              key={index}
              href={social.socialUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 block rounded-full overflow-hidden shadow-lg mr-2 px-1 py-1 bg-black/30"
            >
              {social.socialName === "facebook" && (
                <FaFacebook className="w-full h-full text-white hover:bg-black/30 hover:scale-110 transition-all ease-in-out duration-300" />
              )}
              {social.socialName === "twitter" && (
                <FaTwitter className="w-full h-full text-white hover:bg-black/30 hover:scale-110 transition-all ease-in-out duration-300" />
              )}
              {social.socialName === "instagram" && (
                <FaInstagram className="w-full h-full text-white hover:bg-black/30 hover:scale-110 transition-all ease-in-out duration-300" />
              )}
              {social.socialName === "linkedin" && (
                <FaLinkedin className="w-full h-full text-white hover:bg-black/30 hover:scale-110 transition-all ease-in-out duration-300" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocials;
