import React from "react";
import {
  welcomeTitle,
  welcomeSubTitle,
  welcomeDescription,
  welcomeSubDescription,
} from "./WelcomeConstants";

const WelcomeTitles = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {welcomeTitle}
      </h2>
      <br />
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {welcomeSubTitle}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        {welcomeDescription}
        <br />
        {welcomeSubDescription}
      </p>
    </div>
  );
};

export default WelcomeTitles;
