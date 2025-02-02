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
import { OpportunityContext } from "@/context/OpportunityContext";
import { Opportunity } from "@/app/schema/Opportunity";

const OpportunityRemoveButton = ({ opportunity }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setOpportunities } = useContext(OpportunityContext);
  const notify = ({ opportunityTitle }) => {
    toast(`Opportunity ${opportunityTitle} has been deleted!`, {
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
                <ModalHeader className="flex flex-col gap-1 text-black text-xl">{`Delete ${opportunity.opportunity_name}`}</ModalHeader>
                <ModalBody className="text-black/60 text-sm font-medium">
                  <p>
                    {`Are you sure you wish to delete this opportunity? Once you delete this event, you cannot recover it back.`}
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
                        notify({
                          opportunityTitle: opportunity.opportunity_name,
                        });
                        //console.log("OPP>", opportunity.opportunity_id);
                        Opportunity.removeOpportunity(
                          opportunity.opportunity_id
                        )
                          .then((updatedOpportunity) => {
                            setOpportunities(updatedOpportunity);
                          })
                          .catch((error) => {
                            console.error(
                              "There was some error in retriving opportunities>",
                              error
                            );
                          });
                      }}
                      className="w-full bg-red-600 rounded-xl text-white"
                    >
                      Delete Opportunity
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
        className="flex w-full flex-1 items-center justify-end"
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          variant="flat"
          onPress={onOpen}
          className="bg-red-600 text-white w-1/3 rounded-xl h-12"
          startContent={<IoMdRemoveCircleOutline size={20} />}
        >
          Remove Opportunity
        </Button>
        <RemoveConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </div>
  );
};

export default OpportunityRemoveButton;
