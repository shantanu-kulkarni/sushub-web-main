import React from "react";
import {
  footerAdditionalLinksLabel,
  footerAdditionalLinksFAQsLabel,
  footerAdditionalLinksFAQsUrl,
  footerAdditionalLinksSupportLabel,
  footerAdditionalLinksSupportUrl,
  footerAdditionalLinksPartnershipsLabel,
  footerAdditionalLinksPartnershipsUrl,
  footerAdditionalLinksCommunityLabel,
  footerAdditionalLinksCommunityUrl,
} from "./FooterConstants";

const FooterAdditionalLinks = () => {
  return (
    <div className="p-5 w-1/2 md:w-4/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12">
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        {footerAdditionalLinksLabel}
      </div>
      <a href={footerAdditionalLinksFAQsUrl} className="my-3 block text-sm">
        {footerAdditionalLinksFAQsLabel}
      </a>
      <a href={footerAdditionalLinksSupportUrl} className="my-3 block text-sm">
        {footerAdditionalLinksSupportLabel}
      </a>
      <a
        href={footerAdditionalLinksPartnershipsUrl}
        className="my-3 block text-sm"
      >
        {footerAdditionalLinksPartnershipsLabel}
      </a>
      <a
        href={footerAdditionalLinksCommunityUrl}
        className="my-3 block text-sm"
      >
        {footerAdditionalLinksCommunityLabel}
      </a>
    </div>
  );
};

export default FooterAdditionalLinks;
