import React from "react";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import { BsFillCircleFill } from "react-icons/bs";
import loginHomeAnimation from "/public/lottie/login-animation.json";

const OnboardingAnimationContent = () => {
  return (
    <div className="w-4/6 h-screen text-black font-bold">
      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
      <div className="relative w-full h-full flex items-center justify-start">
        <div className="absolute inset-0 z-0 flex justify-end items-end">
          <div className="w-1/2">
            <Lottie
              animationData={loginHomeAnimation}
              autoPlay={true}
              loop={true}
              height={30}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        <div className="flex flex-col z-10">
          <div className="flex justify-center">
            <div className="w-1/2"></div>
          </div>
          <BsFillCircleFill
            style={{ animation: "zoom 2s infinite" }}
            className="w-64 h-64 text-black px-8 transition ease-in-out "
          />
          <div className="w-full px-8 text-5xl text-neutral-500">
            <TypeAnimation
              cursor={false}
              sequence={["Sustainability Hub.", 1000]}
              style={{ fontSize: "2em" }}
              speed={50}
              repeat={1}
              className="w-full"
            />
          </div>
          <div className="w-full p-8 text-2xl text-black">
            <TypeAnimation
              cursor={true}
              sequence={[
                "A Sustainability Platform For All Your Projects.",
                2000,
                "A Sustainability Platform For All Your Opportunities.",
                2000,
                "A Sustainability Platform For All Your Events.",
                2000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              className="w-full"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OnboardingAnimationContent);
