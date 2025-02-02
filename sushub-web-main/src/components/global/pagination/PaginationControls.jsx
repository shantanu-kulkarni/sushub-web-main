import React from "react";
import { Pagination, Select, SelectItem } from "@nextui-org/react";

const PaginationControls = ({
  currentPage,
  itemsPerPage,
  listOfItems,
  pageItems,
  onChangePaginationItem,
  onChangeSelectionItem,
  defaultSelectedKeys
}) => {
  return (
    <div className="flex justify-center mt-8">
      <Pagination
        size="lg"
        page={currentPage}
        isCompact
        showControls
        total={Math.ceil(listOfItems.length / itemsPerPage)}
        initialPage={1}
        color="warning"
        className="text-blue-500 custom-pagination-selector"
        onChange={onChangePaginationItem}
      />
      <Select
        id="select-item"
        disallowEmptySelection
        defaultSelectedKeys={defaultSelectedKeys}
        aria-label="page-window"
        label=""
        placeholder=""
        className="w-28 text-black px-2"
        size="xs"
        value={itemsPerPage.toString()}
        onChange={onChangeSelectionItem}
      >
        {pageItems.map((pageItem) => (
          <SelectItem
            className="text-black"
            textValue={pageItem.value}
            key={pageItem.value}
          >
            {pageItem.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default PaginationControls;
