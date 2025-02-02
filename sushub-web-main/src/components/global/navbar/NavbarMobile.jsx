import React, { useContext } from "react";
import { NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { ModeratorContext } from "@/context/ModeratorContext";

const NavbarMobile = ({ navMenuItems, onClickMobileMenuItem }) => {
  const { currentUser } = useContext(AuthContext);
  const { isModerator } = useContext(ModeratorContext);

  const mobileMenuItems = [
    { pageLabel: "Home", pageUrl: "/", pageActive: false },
    { pageLabel: "Projects", pageUrl: "/project/list", pageActive: false },
    { pageLabel: "People & Organization", pageUrl: "/people", pageActive: false },
    { pageLabel: "Opportunities", pageUrl: "/events-and-opportunities", pageActive: false },
  ].filter(Boolean);

  return (
    <NavbarMenu className="text-black">
      {mobileMenuItems.map((item, index) => (
        <NavbarMenuItem
          isActive={item.pageActive}
          key={`${item.pageUrl}-${index}`}
        >
          <Link
            onClick={onClickMobileMenuItem}
            className="w-full"
            color={index === 4 ? "danger" : "foreground"}
            href={item.pageUrl}
            size="lg"
          >
            {item.pageLabel}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default NavbarMobile;
