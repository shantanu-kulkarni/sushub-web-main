"use client";
import { React, useState } from "react";
import { Navbar } from "@nextui-org/react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarMobileToggleButton from "./NavbarMobileToggleButton";
import NavbarMobileLogo from "./NavbarMobileLogo";
import { desktopMenuItems, mobileMenuItems } from "./NavbarConstants";
import { usePathname } from "next/navigation";
const NavbarMenu = ({ children }) => {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  if (currentPath !== "/auth" && currentPath !== "/no-internet") {
    return (
      <Navbar
        shouldHideOnScroll
        disableAnimation={false}
        isBordered={true}
        className=" px-0 md:py-3 m-0 flex items-center justify-center"
        maxWidth="full"
        isMenuOpen={isMobileMenuOpen}
      >
        <NavbarMobileToggleButton
          onClickToggleMobileMenu={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
        <NavbarMobileLogo />
        <NavbarDesktop navMenuItems={desktopMenuItems} />
        <NavbarMobile
          navMenuItems={mobileMenuItems}
          onClickMobileMenuItem={() => setMobileMenuOpen(false)}
        />
      </Navbar>
    );
  }
  return null;
  
};

export default NavbarMenu;
