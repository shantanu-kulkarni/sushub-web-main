import React, { useState, useEffect, useCallback } from "react";
import { Card } from "@nextui-org/react";
import CarouselTitle from "./CarouselTitle";
import CarouselHeaders from "./CarouselHeaders";
import CarouselImage from "./CarouselImage";
import CarouselNavigation from "./CarouselNavigation";
import CarouselFooter from "./CarouselFooter";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (touch) => {
    setTouchStart(touch.targetTouches[0].clientX);
  };

  const handleTouchEnd = (touch) => {
    if (!touchStart) {
      return;
    }
    const touchEnd = touch.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      nextSlide();
    } else if (isSwipeRight) {
      prevSlide();
    }
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? props.cardElements.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === props.cardElements.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, props.cardElements.length]);

  useEffect(() => {
    if (props.autoScrollEnabled) {
      const autoScroll = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(autoScroll);
    }
  }, [props.autoScrollEnabled, nextSlide]);
  return (
    <Card
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      isFooterBlurred
      className="relative w-full my-2 md:m-2 aspect-square s:aspect-video sm:aspect-video md:aspect-square lg:aspect-square xl:aspect-video h-full md:w-1/3 col-span-12 sm:col-span-5 md:col-span-3 rounded-3xl shadow-md border-black500 border-1 group duration-1000 transition-all ease-in hover:opacity-90"
    >
      <CarouselTitle cardTitle={props.cardTitle} />
      <CarouselHeaders
        cardSubHeader={props.cardElements[currentIndex].cardSubHeader}
        cardHeader={props.cardElements[currentIndex].cardHeader}
      />
      <CarouselImage cardUrl={props.cardElements[currentIndex].cardUrl} />
      <CarouselNavigation
        onPreviousClick={prevSlide}
        onNextClick={nextSlide}
        buttonSize={25}
      />
      <CarouselFooter
        cardElements={props.cardElements}
        dotSize={20}
        currentIndex={currentIndex}
        onClickSetIndex={setCurrentIndex}
      />
    </Card>
  );
};

export default Carousel;
