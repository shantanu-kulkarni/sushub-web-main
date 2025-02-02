import React from "react";

const AboutUsCardText = (props) => {
  return (
    <div className="flex flex-col col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-8 px-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-0">
          <h1 className="font-semibold text-foreground/90 text-2xl lg:text-3xl">
            {props.aboutUsCardTitle}
          </h1>
          <h1 className="xl:text-large font-medium mt-2 text-small">
            {props.aboutUsCardDescription}
          </h1>
        </div>
      </div>

      <div className="flex w-full items-end lg:justify-end justify-center lg:pt-20 pt-8 pr-4 pb-4">
        <a
          href={props.aboutUsButtonUrl}
          className="lg:text-large text-small font-semibold leading-6 text-black"
        >
          {props.aboutUsButtonText} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default AboutUsCardText;
