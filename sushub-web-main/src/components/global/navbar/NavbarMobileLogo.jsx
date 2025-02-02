import React from "react";
import { NavbarContent, NavbarBrand } from "@nextui-org/react";
import { navbarLogoText } from "./NavbarConstants";
import { Image } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";

const NavbarMobileLogo = () => {
  const router = useRouter();
  return (
    <NavbarContent className="md:hidden pr-3 text-black w-full">
      <NavbarBrand>
        <Image
          onClick={() => router.push("/")}
          src="/logo/SH_logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-16 h-16 mr-2 flex hover:cursor-pointer"
        />
        {/* <p className="font-bold text-2xl px-4">{navbarLogoText}</p>     */}
      </NavbarBrand>
    </NavbarContent>
  );
};

export default NavbarMobileLogo;
