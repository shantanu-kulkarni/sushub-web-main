import React from "react";
import Image from "next/image";
import { footerLogoUrl } from "./FooterConstants";

const FooterLogo = () => {
  return (
    <div className="py-5 w-full md:w-4/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12 flex items-center justify-center">
      <div className="">
        <Image
          src={footerLogoUrl}
          alt="Sustainability Hub Logo"
          width={100}
          height={100}
          className="h-[100%] w-[100%] aspect-square"
        />
      </div>
    </div>
  );
};

export default FooterLogo;
