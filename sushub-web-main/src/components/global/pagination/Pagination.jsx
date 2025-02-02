import { React, useState, useEffect, useMemo, useCallback } from "react";
import "./Pagination.css";
import PaginationControls from "./PaginationControls";
import SearchResultsNotFound from "@/components/global/pagination/SearchResultsNotFound";

const CustomPagination = ({
  listOfItems,
  children,
  noSearchResultsAnimationTitle,
  noSearchResultsAnimationDescription,
  layoutItems = "w-full",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(
    layoutItems === "w-1/2" ? 10 : 5
  );
  const [startIndex, setStartIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const allItems = listOfItems;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButtonClick = useCallback((buttonIndex) => {
    setStartIndex((buttonIndex - 1) * itemsPerPage);
  }, [itemsPerPage]);

  const pageItems = useMemo(() => [
    {
      value: layoutItems === "w-1/2" ? 10 : 5,
      label: layoutItems === "w-1/2" ? 10 : 5,
    },
    {
      value: layoutItems === "w-1/2" ? 20 : 10,
      label: layoutItems === "w-1/2" ? 20 : 10,
    },
    {
      value: layoutItems === "w-1/2" ? 40 : 20,
      label: layoutItems === "w-1/2" ? 40 : 20,
    },
  ], [layoutItems]);

  const calculateItemsPerPage = useCallback((layout) => {
    return layout === "w-1/2" ? 10 : 5;
  }, []);

  const currentItems = useMemo(() => 
    allItems.slice(startIndex, startIndex + itemsPerPage), 
    [allItems, startIndex, itemsPerPage]
  );

  useEffect(() => {
    setCurrentPage(1);
    setStartIndex(0);
  }, [listOfItems]);

  useEffect(() => {
    setItemsPerPage(calculateItemsPerPage(layoutItems));
  }, [layoutItems, calculateItemsPerPage]);

  return listOfItems.length > 0 ? (
    <div className="">
      <div className="flex flex-wrap mt-8">
        {isClient
          ? currentItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${layoutItems} flex justify-start items-start my-2`}
                >
                  {children(item)}
                </div>
              );
            })
          : null}
      </div>
      <PaginationControls
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        listOfItems={listOfItems}
        pageItems={pageItems}
        onChangePaginationItem={useCallback((page) => {
          setItemsPerPage(itemsPerPage);
          setCurrentPage(page);
          handleButtonClick(page);
        }, [itemsPerPage, handleButtonClick])}
        onChangeSelectionItem={useCallback((window) => {
          setItemsPerPage(parseInt(window.target.value, 10));
          setCurrentPage(1);
          setStartIndex(0);
        }, [])}
        defaultSelectedKeys={layoutItems == "w-1/2" ? ["10"] : ["5"]}
      />
    </div>
  ) : (
    <SearchResultsNotFound
      animationTitle={noSearchResultsAnimationTitle}
      animationDescription={noSearchResultsAnimationDescription}
    />
  );
};

export default CustomPagination;
