import React from "react";
import {
  heroRoundedButtonText,
  heroRoundedButtonLinkText,
  heroRoundedButtonLink,
} from "./HeroConstants";

const RoundedButton = () => {
  return (
    <div className="mt-6 sm:mt-8 flex justify-center text-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        {heroRoundedButtonText}
        <a href={heroRoundedButtonLink} className="font-semibold text-black">
          <span className="absolute inset-0" aria-hidden="true" />
          {heroRoundedButtonLinkText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default RoundedButton;
