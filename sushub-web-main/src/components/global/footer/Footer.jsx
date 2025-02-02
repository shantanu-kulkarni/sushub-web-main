"use client";
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterAbout from "./FooterAbout";
import FooterAdditionalLinks from "./FooterAdditionalLinks";
import FooterContactDetails from "./FooterContactDetails";
import FooterSocials from "./FooterSocials";
import FooterBottomBar from "./FooterBottomBar";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();
  if (currentPath !== "/auth" && currentPath !== "/no-internet") {
    return (
      <footer className="bg-black text-white sm:mt-10 pt-10 z-20 relative">
        <div className="w-full m-auto text-white flex flex-wrap justify-center">
          <FooterLogo />
          <FooterAbout />
          <FooterAdditionalLinks />
          <FooterContactDetails />
          <FooterSocials />
        </div>
        <div className="pt-2">
          <FooterBottomBar />
        </div>
      </footer>
    );
  }
  return null;
};

export default Footer;
