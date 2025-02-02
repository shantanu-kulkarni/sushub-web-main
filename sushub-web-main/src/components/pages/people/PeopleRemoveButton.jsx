import React, { useContext } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import { PeopleContext } from "@/context/PeopleContext";
import { People } from "@/app/schema/People";

const PeopleRemoveButton = ({ currentPerson }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setPeople } = useContext(PeopleContext);
  const notify = ({ personTitle }) => {
    toast(`${personTitle} has been removed as organizer!`, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  };
  const RemoveConfirmationModal = ({ isOpen, onOpenChange }) => {
    return (
      <>
        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-black text-xl">{`Remove ${currentPerson.people_name}`}</ModalHeader>
                <ModalBody className="text-black/60 text-sm font-medium">
                  <p>
                    {`Are you sure you wish to remove this person from list of verified people?`}
                  </p>
                </ModalBody>
                <ModalFooter className="w-full">
                  <div className="w-1/2">
                    <Button
                      variant="bordered"
                      onPress={onClose}
                      className="w-full text-black border-black"
                    >
                      Close
                    </Button>
                  </div>
                  <div className="w-1/2">
                    <Button
                      variant="flat"
                      onPress={() => {
                        onClose();
                        People.removePeople(currentPerson.people_id)
                          .then((updatedPeopleList) => {
                            setPeople(updatedPeopleList);
                            notify({
                              personTitle: currentPerson.people_name,
                            });
                          })
                          .catch((e) => {
                            // console.log(
                            //   "There was some error in updating the list",
                            //   e
                            // );
                          });
                      }}
                      className="w-full bg-red-600 rounded-xl text-white"
                    >
                      Remove Person
                    </Button>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  };
  return (
    <div className="flex flex-row text-sm font-medium mt-2 w-full justify-center items-center">
      <div
        className="flex flex-1 items-center justify-end"
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          variant="flat"
          onPress={onOpen}
          className="bg-red-600 text-white w-1/2 rounded-xl h-12"
          startContent={<IoMdRemoveCircleOutline size={20} />}
        >
          Remove Person
        </Button>
        <RemoveConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </div>
  );
};

export default PeopleRemoveButton;
