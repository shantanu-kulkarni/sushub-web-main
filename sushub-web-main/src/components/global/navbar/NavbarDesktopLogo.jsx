import React from "react";
import { NavbarBrand, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import { navbarLogoText } from "./NavbarConstants";
import { useRouter } from "next-nprogress-bar";

const NavbarDesktopLogo = () => {
  const router = useRouter();
  return (
    <NavbarContent className="hidden md:flex gap-4 text-black" justify="start">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Image
          onClick={() => router.push("/")}
          src="/logo/SH_logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-20 h-20 mr-2 flex hover:cursor-pointer"
        />
        {/* <p className="font-bold text-inherit text-2xl">{navbarLogoText}</p> */}
      </NavbarBrand>
    </NavbarContent>
  );
};

export default NavbarDesktopLogo;
