import NewOrganizerForm from "@/components/pages/people/new-organizer/NewOrganizerForm";
import React, { useState, useContext } from "react";
import { PeopleContext } from "@/context/PeopleContext";
import CustomPagination from "@/components/global/pagination/Pagination";
import PeopleCard from "@/components/pages/people/PeopleCard";
import { Button } from "@nextui-org/react";
import { IoIosArrowRoundBack, IoMdAddCircleOutline } from "react-icons/io";
const AddPeople = () => {
  const { people } = useContext(PeopleContext);
  const [addPeopleSection, setAddPeopleSection] = useState(false);
  if (people == []) {
    return;
  }
  return (
    <div className="mt-4">
      <div>
        {addPeopleSection ? (
          <div className="mt-2">
            <Button
              variant="bordered"
              onClick={() => {
                setAddPeopleSection(!addPeopleSection);
              }}
              className=" text-black border-black font-semibold w-full rounded-xl h-12"
              startContent={<IoIosArrowRoundBack size={20} />}
            >
              View All People
            </Button>
          </div>
        ) : (
          <div className="mt-2">
            <Button
              variant="flat"
              onClick={() => {
                setAddPeopleSection(!addPeopleSection);
              }}
              className="bg-black text-white w-full rounded-xl h-12"
              startContent={<IoMdAddCircleOutline size={20} />}
            >
              Add New Person
            </Button>
          </div>
        )}
      </div>
      <div className="mt-2">
        {addPeopleSection ? (
          <div className="mt-8">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="mt-8 text-left flex-row w-full text-black">
                <NewOrganizerForm isModerator={true} />
              </div>
            </div>
          </div>
        ) : (
          <CustomPagination
            listOfItems={people}
            layoutItems={"w-full"}
          >
            {(person) => <PeopleCard key={person.people_id} person={person} />}
          </CustomPagination>
        )}
      </div>
    </div>
  );
};

export default AddPeople;
