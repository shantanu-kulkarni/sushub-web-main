import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import {
  projectFilterTitle,
  projectFilterDescription,
} from "../ProjectListConstants";
import { SquareArrowOutUpRight } from "lucide-react";
const ProjectFilters = ({
  projectChips,
  sdgChips,
  selectedChips,
  selectedSDGChips,
  toggleChipValue,
  toggleSDGChipValue,
}) => {
  return (
    <div>
      <Accordion
        variant="bordered"
        defaultExpandedKeys={["1"]}
        className="rounded-3xl border-none bg-default-100/50 px-2 xs:px-8 mt-2 xs:mt-4 py-4 shadow-lg z-10"
      >
        <AccordionItem
          key="1"
          aria-label="Filter by Tags"
          title="Filter by Tags"
          className="text-black text-sm xs:text-sm md:text-md font-semibold"
        >
          <div className="flex flex-row justify-start my-4" translate="no">
            <div className="flex flex-wrap gap-1 w-full">
              {projectChips.map((projectFilter, index) => (
                <Button
                  key={index}
                  startContent={
                    selectedChips.includes(projectFilter) ? (
                      <FaCheck className="" />
                    ) : null
                  }
                  color="default"
                  size="sm"
                  onClick={() => toggleChipValue(projectFilter)}
                  className={`z-5 shadow-md py-1 px-2 my-0.5 mx-0.5 h-unit-6 xs:h-unit-8 text-xs hover:scale-105 ${
                    selectedChips.includes(projectFilter)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {projectFilter}
                </Button>
              ))}
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Filter by SDGs"
          title="Filter by SDGs"
          className="text-black text-sm xs:text-sm md:text-md font-semibold"
        >
          <div className="flex flex-row justify-start mt-4" translate="no">
            <div className="flex flex-wrap gap-1 w-full">
              {sdgChips.map((projectFilter, index) => (
                <Button
                  key={index}
                  startContent={
                    selectedSDGChips.includes(projectFilter) ? (
                      <FaCheck className="" />
                    ) : null
                  }
                  color="default"
                  size="sm"
                  onClick={() => toggleSDGChipValue(projectFilter)}
                  className={`z-5 shadow-md py-1 px-2 my-0.5 mx-0.5 h-unit-6 xs:h-unit-8 text-xs hover:scale-105 ${
                    selectedSDGChips.includes(projectFilter)
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {projectFilter}
                </Button>
              ))}
            </div>
          </div>
          <div className="text-black/30 font-bold text-xs md:text-small w-full flex justify-start items-center relative z-10 cursor-pointer space-x-1 mt-8">
            <a
              className="text-black underline flex items-center"
              target="_blank"
              href="https://sdgs.un.org/goals"
            >
              <span>Know More About SDGs</span>
              <SquareArrowOutUpRight size={20} className="ml-1" />
            </a>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProjectFilters;
