import React from "react";
import Link from "next/link";
const FooterBottomBar = () => {
  return (
    <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row w-full">
      <div className="mt-2 mx-2 flex justify-center md:justify-start">
        ©{new Date().getFullYear()} Uni Konstanz. All rights reserved.
      </div>
      <div className="mx-2 md:flex-auto md:flex-row mt-2 flex-row flex justify-center md:justify-end">
      <a href="https://www.linkedin.com/in/shantanu-d-kulkarni/" target="_blank" className=" text-center md:text-end">
          Developer Info
        </a>
        <Link href="/privacy-policy" className="ml-4 text-center md:text-end">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default FooterBottomBar;
