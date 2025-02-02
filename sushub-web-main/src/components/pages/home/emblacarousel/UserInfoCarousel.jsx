import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lottie from "lottie-react";
import createFormLottie from "../../../../../public/lottie/create_form.json";
import calendarEventsLottie from "../../../../../public/lottie/calendar_events_opp.json";
import networkLottie from "../../../../../public/lottie/networking.json";
import feedLottie from "../../../../../public/lottie/feed.json";
import { Button } from "@nextui-org/react";

const featuredContent = [
  {
    featured_id: 1,
    featured_name: "Enroll in Sustainability Projects",
    featured_description:
      "Join the global movement for a greener future! Browse and enroll in sustainability projects that align with your passion. Keep a track of your impact through past project histories and easily connect with organizations making a difference.",
    featured_lottie: createFormLottie,
    featured_visibility: true,
  },
  {
    featured_id: 2,
    featured_name: "Discover Events and Opportunities",
    featured_description:
      "Stay at the forefront of sustainability innovation! Explore a curated list of events, workshops and opportunities in the world of sustainability. From local meetups to global conferences, find ways to learn, grow and contribute.",
    featured_lottie: calendarEventsLottie,
    featured_visibility: true,
  },
  {
    featured_id: 3,
    featured_name: "Network with Sustainability Pioneers",
    featured_description:
      "Connect with a community of changemakers! Discover and interact with individuals who are dedicated to sustainability. Share your own experiences, learn from others, and get inspired. You might even be featured as a sustainability champion.",
    featured_lottie: networkLottie,
    featured_visibility: true,
  },
  {
    featured_id: 4,
    featured_name: "Become a Project Organizer",
    featured_description:
      "Turn your ideas into action! Take the lead by organizing your own sustainability projects. Our platform provides the tools and resources your need to make a real impact. Plus, stay updated with daily sustainability news and trends to keep your projects relevant and effective.",
    featured_lottie: feedLottie,
    featured_visibility: true,
  },
];

const UserInfoCarousel = () => {
  const autoplayOptions = { delay: 7000 };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1 },
    [Autoplay(autoplayOptions)]
  );

  const handleMouseEnter = () => {
    if (emblaApi) emblaApi.plugins().autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (emblaApi) emblaApi.plugins().autoplay.play();
  };
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="w-full h-full max-w-md mx-auto text-black">
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {featuredContent.map((item) => (
            <div
              key={item.featured_id}
              className="embla__slide flex-[0_0_100%] p-4 flex flex-col justify-center items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Lottie
                animationData={item.featured_lottie}
                className="w-64 h-64 mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-center text-black">
                {item.featured_name}
              </h3>
              <p className="text-sm text-center my-4 text-black/30 font-bold">
                {item.featured_description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2 md:mt-4 space-x-2 relative z-50">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`${
              index === selectedIndex
                ? "bg-black w-8 h-3"
                : "bg-black/30 w-3 h-3"
            } rounded-full opacity-100 transition-all ease-in-out duration-500`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default UserInfoCarousel;
