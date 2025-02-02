import React from "react";
import { NavbarContent } from "@nextui-org/react";
import NavbarDesktopItems from "./NavbarDesktopItems";
import NavbarDesktopLogo from "./NavbarDesktopLogo";
import NavbarLoginButton from "./NavbarLoginButton";

const NavbarDesktop = ({ navMenuItems }) => {
  return (
    <NavbarContent>
      <NavbarDesktopLogo />
      <NavbarDesktopItems navMenuItems={navMenuItems} />
      <NavbarLoginButton />
    </NavbarContent>
  );
};

export default NavbarDesktop;
