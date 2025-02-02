import React from "react";
import {
  footerAboutLabel,
  footerAboutGreenOfficeLabel,
  footerAboutGreenOfficeUrl,
  footerAboutBlogLabel,
  footerAboutBlogUrl,
  footerAboutPrivacyPolicyLabel,
  footerAboutPrivacyPolicyUrl,
  footerAboutContactUsLabel,
  footerAboutContactUsUrl,
} from "./FooterConstants";

const FooterAbout = () => {
  return (
    <div className="p-5 w-1/2 md:w-4/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12 flex items-center">
      <div>
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          {footerAboutLabel}
        </div>
        <a href={footerAboutGreenOfficeUrl} className="my-3 block text-sm">
          {footerAboutGreenOfficeLabel}
        </a>
        <a href={footerAboutBlogUrl} className="my-3 block text-sm">
          {footerAboutBlogLabel}
        </a>
        <a href={footerAboutPrivacyPolicyUrl} className="my-3 block text-sm">
          {footerAboutPrivacyPolicyLabel}
        </a>
        <a href={footerAboutContactUsUrl} className="my-3 block text-sm">
          {footerAboutContactUsLabel}
        </a>
      </div>
    </div>
  );
};

export default FooterAbout;
