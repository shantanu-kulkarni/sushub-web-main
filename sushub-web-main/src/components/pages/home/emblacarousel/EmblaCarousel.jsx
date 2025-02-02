import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/react";
import { FeaturedContext } from "@/context/FeaturedContext";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";
import { useContext } from "react";

const EmblaCarousel = ({featuredContentData}) => {
  
  const autoplayOptions = { delay: 3000 };
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

  return (
    <div className="w-full overflow-hidden text-black">
      <div className="w-full embla__viewport" ref={emblaRef}>
        <div className="w-full embla__container flex">
          {featuredContentData.map((item) => (
            <div
              key={item.featured_id}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] rounded-3xl p-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.featured_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-auto"
              >
                <div className="h-full aspect-square md:aspect-video relative overflow-hidden rounded-3xl group hover:scale-105 hover:transition-transform ease-in-out">
                  <Image
                    src={item.featured_image}
                    alt={item.featured_name}
                    className="w-full h-full aspect-square md:aspect-video object-cover transition-opacity duration-300 ease-in-out rounded-3xl"
                  />

                  <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-50 z-10"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4 z-20 text-white opacity-0 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100">
                    <h3 className="text-xl font-bold mb-2">
                      {item.featured_name}
                    </h3>
                    <p className="text-sm truncate-2-lines text-center">
                      {item.featured_description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
