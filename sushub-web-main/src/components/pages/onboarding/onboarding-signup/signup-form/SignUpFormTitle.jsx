import React from "react";
import { TypeAnimation } from "react-type-animation";

const SignUpFormTitle = ({ currentUser }) => {
  return (
    <div className="flex w-full justify-start items-start flex-col">
      <div className="w-full flex items-start justify-start text-2xl font-bold">
        <TypeAnimation
          cursor={false}
          sequence={[`Hello, ${currentUser.displayName}.`, 1000]}
          // style={{ fontSize: "2em" }}
          speed={50}
          repeat={1}
          className="w-full"
        />
      </div>
      <div className="w-full flex items-start justify-start text-sm font-normal text-white/60">
        {currentUser.email}.
      </div>
    </div>
  );
};

export default SignUpFormTitle;
