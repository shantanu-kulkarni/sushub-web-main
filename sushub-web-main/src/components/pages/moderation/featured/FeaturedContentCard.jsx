import { React, useState, useContext } from "react";
import { Card, Image, Checkbox } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import FeaturedRemoveButton from "./FeaturedRemoveButton";
import toast from "react-hot-toast";
import { FeaturedContext } from "@/context/FeaturedContext";
import { Featured } from "@/app/schema/Featured";

const FeaturedContentCard = ({ featuredItem, isRemoveCard = false }) => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(
    featuredItem.featured_visibility
  );
  const { setFeaturedContent } = useContext(FeaturedContext);

  const notify = ({ featuredContentTitle, isSelected }) => {
    toast(
      `Featured content ${featuredContentTitle} is now ${
        isSelected ? "visible" : "hidden"
      }!`,
      {
        position: "bottom-right",
        style: {
          color: "#fff",
          backgroundColor: "#000",
        },
      }
    );
  };
  return (
    <Card
      translate="no"
      onClick={() =>
        window.open(featuredItem.featured_link, "_blank", "noopener,noreferrer")
      }
      isPressable
      className="capitalize w-full h-48 aspect-video text-xl font-bold border-2 border-black text-white flex flex-row items-start justify-center p-0 hover:scale-105 shadow-md"
    >
      <div className="w-full flex flex-row">
        <div className="w-1/3">
          <Image
            alt="Image"
            isZoomed
            radius="none"
            className="h-60 scale-100 object-cover rounded-l-lg rounded-r-none hover:rounded-l-lg hover:rounded-r-none"
            shadow="sm"
            src={featuredItem.featured_image}
          />
        </div>
        <div className="w-2/3 flex flex-col items-start p-4">
          <div className="text-2xl font-bold line-clamp-1 z-10 text-black">
            {featuredItem.featured_name}
          </div>
          <div className="">
            <div className="flex flex-col z-10">
              <div
                className={`text-medium font-normal pt-4 text-left text-black/60 line-clamp-2`}
              >
                {featuredItem.featured_description}
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div
                className={`w-1/2 text-sm ${
                  isRemoveCard ? "mt-2" : "mt-4"
                } flex items-center`}
              >
                <Checkbox
                  isReadOnly={isRemoveCard ? true : false}
                  isSelected={isSelected}
                  onValueChange={(value) => {
                    Featured.updateFeaturedContentVisibility(
                      featuredItem.featured_id,
                      value
                    )
                      .then((updatedFeaturedItemContentItems) => {
                        notify({
                          featuredContentTitle: featuredItem.featured_name,
                          isSelected: value,
                        });
                        setFeaturedContent(updatedFeaturedItemContentItems);
                        setIsSelected(value);
                      })
                      .catch((e) => {
                        console.error(
                          "There was some error with featured content",
                          e
                        );
                      });
                  }}
                  color="default"
                  className="text-xl font-medium"
                >
                  <div className="text-sm text-black/60 ">Show Content</div>
                </Checkbox>
              </div>
              <div className="w-1/2">
                {isRemoveCard ? (
                  <FeaturedRemoveButton featuredContentItem={featuredItem} />
                ) : null}
              </div>
            </div>

            <div className="text-medium font-normal text-black/60 pt-4 z-10"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedContentCard;
