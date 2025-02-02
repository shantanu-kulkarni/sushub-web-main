import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import {
  opportunitiesPageHeaderTitle,
  opportunitiesPageHeaderDescription,
} from "./OpportunitiesConstants";

const OpportunitiesPageHeader = ({
  selectionValue,
  onSelectionChangeValue,
}) => {
  return (
    <div className=" flex flex-col xs:flex-col md:flex-row">
      <div className="w-full flex-col">
        <div className="global-title">
          {opportunitiesPageHeaderTitle}
        </div>
        <div className="global-title-description">
          {opportunitiesPageHeaderDescription}
        </div>
      </div>
      <div className="w-full xs:w-full s:w-full md:w-1/3 flex md:justify-end items-center py-4">
        <Select
          label="Current Section"
          variant="bordered"
          placeholder="Select your option"
          className="max-w-full md:max-w-xs text-black"
          defaultSelectedKeys={["Events"]}
          value={selectionValue}
          onSelectionChange={onSelectionChangeValue}
        >
          <SelectItem key={"Events"} value="Events" className="text-black">
            Events
          </SelectItem>
          <SelectItem
            key={"Opportunities"}
            value="Opportunities"
            className="text-black"
          >
            Opportunities
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};

export default OpportunitiesPageHeader;
