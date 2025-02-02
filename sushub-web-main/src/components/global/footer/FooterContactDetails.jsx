import React from "react";
import {
  footerContactDetailsLabel,
  footerContactDetailsAddressLabel,
  footerContactDetailsAddressUrl,
  footerContactDetailsEmailLabel,
  footerContactDetailsEmailToUrl,
  footerContactDetailsPhoneLabel,
  footerContactDetailsPhoneUrl,
} from "./FooterConstants";

const FooterContactDetails = () => {
  return (
    <div className="p-5 w-full md:w-full lg:w-4/12 xl:w-3/12 2xl:w-3/12">
      <div className="text-xs text-center md:text-center lg:text-start uppercase text-gray-400 font-medium mb-6">
        {footerContactDetailsLabel}
      </div>
      <p className="my-3 block  text-center md:text-center lg:text-start text-sm">
        <a href={footerContactDetailsAddressUrl}>
          {footerContactDetailsAddressLabel}
        </a>
      </p>
      <p className="my-3 block text-center md:text-center lg:text-start text-sm">
        <a href={footerContactDetailsEmailToUrl}>
          <u className="">{footerContactDetailsEmailLabel}</u>
        </a>
      </p>
      <p className="my-3 block text-center md:text-center lg:text-start text-sm">
        <a href={footerContactDetailsPhoneUrl}>
          {footerContactDetailsPhoneLabel}
        </a>
      </p>
    </div>
  );
};

export default FooterContactDetails;
