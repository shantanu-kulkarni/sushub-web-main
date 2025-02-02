import React from "react";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
const NavbarDesktopItems = ({ navMenuItems }) => {
  return (
    <NavbarContent
      className="hidden md:flex gap-10 flex-grow text-black items-center"
      justify="center"
    >
      <NavbarItem isActive={navMenuItems[0].pageActive}>
        <Link
          href={navMenuItems[0].pageUrl}
          className="text-1xl font-bold"
          aria-current="page"
        >
          {navMenuItems[0].pageLabel}
        </Link>
      </NavbarItem>
      <NavbarItem isActive={navMenuItems[1].pageActive}>
        <Link
          href={navMenuItems[1].pageUrl}
          className="text-1xl font-bold"
          aria-current="page"
        >
          {navMenuItems[1].pageLabel}
        </Link>
      </NavbarItem>
      <NavbarItem isActive={navMenuItems[2].pageActive}>
        <Link
          href={navMenuItems[2].pageUrl}
          className="text-1xl font-bold"
          aria-current="page"
        >
          {navMenuItems[2].pageLabel}
        </Link>
      </NavbarItem>
      <NavbarItem isActive={navMenuItems[3].pageActive}>
        <Link
          href={navMenuItems[3].pageUrl}
          className="text-1xl font-bold"
          aria-current="page"
        >
          {navMenuItems[3].pageLabel}
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavbarDesktopItems;
