import { React, useContext } from "react";
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
import { FeaturedContext } from "@/context/FeaturedContext";
import { Featured } from "@/app/schema/Featured";

const FeaturedRemoveButton = ({ featuredContentItem }) => {
  const { setFeaturedContent } = useContext(FeaturedContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const notify = ({ featuredContentTitle }) => {
    toast(`Featured content ${featuredContentTitle} has been deleted!`, {
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
                <ModalHeader className="flex flex-col gap-1 text-black text-xl">{`Delete ${featuredContentItem.featured_name}`}</ModalHeader>
                <ModalBody className="text-black/60 text-sm font-medium">
                  <p>
                    {`Are you sure you wish to delete this featured content? Once you delete this featured content, you cannot recover it back.`}
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
                          featuredContentTitle:
                            featuredContentItem.featured_name,
                        });
                        Featured.removeFeaturedContent(
                          featuredContentItem.featured_id
                        )
                          .then((updatedFeaturedContentItems) => {
                            setFeaturedContent(updatedFeaturedContentItems);
                          })
                          .catch((e) => {
                            console.error(
                              "There was some error with featured content",
                              e
                            );
                          });
                      }}
                      className="w-full bg-red-600 rounded-xl text-white"
                    >
                      Delete Featured
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
          className="bg-red-600 text-white w-full rounded-xl h-12"
          startContent={<IoMdRemoveCircleOutline size={20} />}
        >
          Remove Featured
        </Button>
        <RemoveConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </div>
  );
};

export default FeaturedRemoveButton;
