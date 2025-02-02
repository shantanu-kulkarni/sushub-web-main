import React from "react";
import {
  heroTitle,
  heroSubtitle,
  heroButtonLabel,
  heroButtonLink,
  heroTextButtonLabel,
  heroTextButtonLink,
} from "./HeroConstants";

const HeroTitle = () => {
  return (
    <div className="text-center w-full h-[40vh]">
      <h1 className="text-4xl w-full font-bold tracking-tight text-gray-900 sm:text-6xl space-y-4">
        {`Welcome to`} <br /> {`Sustainability Hub!`}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">{heroSubtitle}</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href={heroButtonLink}
          className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {heroButtonLabel}
        </a>
        <a
          href={heroTextButtonLink}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {heroTextButtonLabel} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default HeroTitle;
