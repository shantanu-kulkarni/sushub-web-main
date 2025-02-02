import React from "react";
import {
  welcomeButtonLabel,
  welcomeButtonLabelLink,
  welcomeTextButtonLabel,
  welcomeTextButtonLabelLink,
} from "./WelcomeConstants";

const WelcomeButtons = () => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
      <a
        href={welcomeButtonLabelLink}
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {welcomeButtonLabel}
      </a>
      <a
        href={welcomeTextButtonLabelLink}
        className="text-sm font-semibold leading-6 text-white"
      >
        {welcomeTextButtonLabel} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
};

export default WelcomeButtons;
