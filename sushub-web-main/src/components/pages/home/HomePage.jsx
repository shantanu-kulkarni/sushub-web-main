import React, { useState } from "react";
import { Button, Image } from "@nextui-org/react";
import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import Lottie from "lottie-react";
import infoCardBackground from "/public/lottie/homepage-info-background.json";
import infoCarouselBackground from "/public/lottie/homepage-carousel-background.json";
import featuredBackground from "/public/lottie/login-animation.json";
import EmblaCarousel from "./emblacarousel/EmblaCarousel.jsx";
import { useRouter } from "next-nprogress-bar";
import BallAnimation from "./3d-animation/BallAnimation.jsx";
import { FeaturedContext } from "@/context/FeaturedContext";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";
import { useContext } from "react";

const HomePage = () => {
  let featuredContentData = [];
  const { featuredContent } = useContext(FeaturedContext);
  if (disableApiAccessToApplication) {
    featuredContentData = [
      {
        featured_id: 5,
        featured_name: "The Beauty of Nature",
        featured_description:
          "Explore the wonders of the natural world, from majestic mountains to serene forests.",
        featured_image:
          "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wWdlFhxf8GV",
        featured_link: "https://example.com/content1",
        featured_visibility: true,
      },
      {
        featured_id: 1,
        featured_name: "The Beauty of Nature",
        featured_description:
          "Explore the wonders of the natural world, from majestic mountains to serene forests.",
        featured_image:
          "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wWdlFhxf8GV",
        featured_link: "https://example.com/content1",
        featured_visibility: true,
      },
      {
        featured_id: 2,
        featured_name: "The Beauty of Nature",
        featured_description:
          "Explore the wonders of the natural world, from majestic mountains to serene forests.",
        featured_image:
          "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wWdlFhxf8GV",
        featured_link: "https://example.com/content1",
        featured_visibility: true,
      },
      {
        featured_id: 3,
        featured_name: "The Beauty of Nature",
        featured_description:
          "Explore the wonders of the natural world, from majestic mountains to serene forests.",
        featured_image:
          "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wWdlFhxf8GV",
        featured_link: "https://example.com/content1",
        featured_visibility: true,
      },
      {
        featured_id: 4,
        featured_name: "The Beauty of Nature",
        featured_description:
          "Explore the wonders of the natural world, from majestic mountains to serene forests.",
        featured_image:
          "https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wWdlFhxf8GV",
        featured_link: "https://example.com/content1",
        featured_visibility: true,
      },
    ];
  } else {
    featuredContent.map((item) =>
      item.featured_visibility ? featuredContentData.push(item) : null
    );
    //console.table(featuredContent);
  }

  const router = useRouter();
  const handleNavigation = (url) => {
    router.push(url);
  };
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full px-4 xs:px-4 md:px-8 pb-8">
        <div className="w-full h-auto flex justify-center items-center text-black">
          <div className="flex flex-col items-center w-full h-full">
            <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-[5vh]">
              Welcome to Sustainability Hub!
            </div>
            <div className="pt-4 pb-6 sm:py-6 md:py-8 w-11/12 sm:w-5/6 md:w-2/3 text-center text-lg sm:text-xl md:text-2xl font-medium text-black/60">
              A one-stop platform for all the sustainability events,
              opportunities, and projects.
            </div>
            <div className="mt-8 w-full flex justify-center items-center relative z-10 grow h-auto cursor-pointer">
              <BallAnimation />
            </div>
            <div className="text-black/30 font-bold text-small md:text-medium w-full flex justify-center items-center relative z-10 cursor-pointer space-x-1">
              <span>Swipe to Explore SDGs.</span>
              <a
                className="text-black underline flex items-center"
                target="_blank"
                href="https://sdgs.un.org/goals"
              >
                <span>Know More About SDGs</span>
                <SquareArrowOutUpRight size={20} className="ml-1" />
              </a>
            </div>
            <div className="w-full flex flex-col s:flex-row justify-center items-center mt-8 p-2">
              <Button
                onClick={() => handleNavigation("/project/list")}
                className="text-white bg-black w-full s:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 rounded-2xl h-12 m-2 s:m-4"
                endContent={
                  <ArrowUpRight
                    size={20}
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                }
              >
                Explore Projects
              </Button>
              <Button
                variant="bordered"
                onClick={() => handleNavigation("/events-and-opportunities")}
                className="text-black border-black w-full s:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 rounded-2xl h-12 m-2 s:m-4"
                endContent={
                  <ArrowUpRight
                    size={20}
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                }
              >
                Explore Events
              </Button>
            </div>
            <div className="mt-4 sm:mt-6 flex justify-center text-center">
              <Button
                variant="bordered"
                className="relative rounded-full px-4 py-2 text-sm md:text-md leading-6 text-black/60 border-black/60 hover:border-black transition-transform duration-300"
                onClick={() =>
                  window.open(
                    "https://www.uni-konstanz.de/green-office/",
                    "_blank"
                  )
                }
              >
                {`What does the Green Office do?`}
                <span className="font-semibold text-black inline-flex items-center ml-1 transition-transform duration-300">
                  {`Know More`}{" "}
                  <SquareArrowOutUpRight size={20} className="ml-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-auto shadow-lg rounded-3xl bg-default-100/50 bg-clip-padding backdrop-filter backdrop-blur-sm my-6 p-4 z-10 overflow-hidden">
          <div className="relative z-10 w-full h-auto text-black flex flex-col justify-center items-center lg:flex-row">
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center lg:text-left">
              <div className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Explore & contribute to the projects and causes that truly
                matter to you!
              </div>
              <div className="w-full mt-8 flex justify-center lg:justify-start items-center">
                <Button
                  variant="bordered"
                  onClick={() => handleNavigation("/project/list")}
                  className="text-black border-black w-full sm:w-auto lg:w-1/3 rounded-2xl h-12"
                  endContent={
                    <ArrowUpRight
                      size={20}
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  }
                >
                  Take me to Projects
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-full flex justify-end lg:justify-end items-center mt-8 lg:mt-0">
              <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 h-full relative overflow-hidden rounded-3xl group hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <a
                    href={() => handleNavigation("/project/list")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Image
                      isZoomed
                      src="/images/SH-Img1.jpg"
                      alt="Wind turbine"
                      className="w-full h-full object-cover aspect-video transition-opacity duration-300 ease-in-out rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-20">
                      <h3 className="text-xl font-bold mb-2">
                        Explore Projects
                      </h3>
                      <p className="text-sm text-center">
                        Your project might be gamechanging! Enter your idea
                        carefully.
                      </p>
                    </div>
                  </a>
                </div>

                <div className="h-full relative overflow-hidden rounded-3xl group hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <a
                    href={() => handleNavigation("/project/list")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Image
                      isZoomed
                      src="/images/SH-Img2.jpg"
                      alt="Top view of houses and trees"
                      className="w-full h-full object-cover aspect-video transition-opacity duration-300 ease-in-out rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-20">
                      <h3 className="text-xl font-bold mb-2">
                        Explore Project Ideas
                      </h3>
                      <p className="text-sm text-center">
                        Think carefully, your idea could change the world.
                      </p>
                    </div>
                  </a>
                </div>

                <div className="h-full relative overflow-hidden rounded-3xl group hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <a
                    href={() => handleNavigation("/project/list")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Image
                      isZoomed
                      src="/images/SH-Img3.jpg"
                      alt="Hands holding a plant"
                      className="w-full h-full object-cover aspect-video transition-opacity duration-300 ease-in-out rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-20">
                      <h3 className="text-xl font-bold mb-2">
                        Explore Project Groups
                      </h3>
                      <p className="text-sm text-center">
                        Your team might make a huge impact!
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 z-0">
            <Lottie
              animationData={infoCardBackground}
              autoPlay={true}
              loop={true}
              className="w-full h-full opacity-25"
            />
          </div>
        </div>
        {featuredContentData.length == 0 ? null : (
          <div className="relative w-full h-auto shadow-lg rounded-3xl bg-default-100/50 bg-clip-padding backdrop-filter backdrop-blur-sm my-6 p-4 z-10 overflow-hidden">
            <div className="w-full h-full flex justify-center items-center flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black w-full text-center px-4 py-6 sm:py-8">
                Featured On Sustainability Hub
              </div>
              <div className="w-full h-auto">
                <EmblaCarousel featuredContentData={featuredContentData} />
              </div>
              <div className="w-full flex justify-end mt-4 pt-4 pb-8 px-4">
                <Button
                  variant="bordered"
                  onClick={() => handleNavigation("/events-and-opportunities")}
                  className="text-black border-black w-full s:w-auto rounded-2xl h-12"
                  endContent={
                    <ArrowUpRight
                      size={20}
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  }
                >
                  Explore Events and Opportunities
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
