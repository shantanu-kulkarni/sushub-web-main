import React from "react";

const OnboardingSidebarTitle = ({ currentUser }) => {
  return (
    <div
      className={`w-full ${
        currentUser ? "h-auto" : "h-auto"
      } flex justify-start items-start px-8 py-4 flex-col md:hidden`}
    >
      <div className="text-3xl font-bold text-white md:hidden">
        Sustainability Hub
      </div>
      <div className="text-xl text-white/60 md:hidden">
        an initiative by Green Office and Uni Konstanz.
      </div>
    </div>
  );
};

export default OnboardingSidebarTitle;
