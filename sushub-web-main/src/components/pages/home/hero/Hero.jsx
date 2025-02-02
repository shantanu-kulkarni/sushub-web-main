import React from "react";
import RoundedButton from "./HeroRoundedButton";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-40 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
        <HeroTitle />
        <RoundedButton />
      </div>
    </div>
  );
};

export default Hero;
