import React from "react";
import { CardFooter } from "@nextui-org/react";
import { GoDot } from "react-icons/go";
import { FaEnvira } from "react-icons/fa6";

const CarouselFooter = (props) => {
  return (
    <CardFooter className="absolute bg-white/30 bottom-0 border-zinc-100/50 z-20 justify-between h-1/6">
      <div>
        <div className="flex top-4 justify-center py-2">
          {props.cardElements.map((card, cardIndex) => (
            <div key={cardIndex} className="">
              {cardIndex === props.currentIndex ? (
                <FaEnvira
                  size={props.dotSize}
                  className="text-3xl cursor-pointer text-black"
                />
              ) : (
                <GoDot
                  size={props.dotSize}
                  className="text-3xl cursor-pointer text-black"
                  onClick={() => props.onClickSetIndex(cardIndex)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 mb-10 flex items-center justify-center gap-x-6">
        <a
          href={`/projects/${props.cardElements[props.currentIndex].cardId}`}
          className="text-m font-semibold leading-6 text-black"
        >
          Learn More <span aria-hidden="true">→</span>
        </a>
      </div>
    </CardFooter>
  );
};

export default CarouselFooter;
