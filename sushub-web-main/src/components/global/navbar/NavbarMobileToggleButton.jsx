import { NavbarContent, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";

const NavbarMobileToggleButton = ({ onClickToggleMobileMenu }) => {
  return (
    <NavbarContent className="md:hidden flex items-center" justify="center">
      <NavbarMenuToggle
        className="text-black"
        onClick={onClickToggleMobileMenu}
      />
    </NavbarContent>
  );
};

export default NavbarMobileToggleButton;
