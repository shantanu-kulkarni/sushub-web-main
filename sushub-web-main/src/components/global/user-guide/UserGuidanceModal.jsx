import React, { useEffect, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import UserInfoCarousel from "@/components/pages/home/emblacarousel/UserInfoCarousel";

const UserGuidanceModal = ({ openGuidanceModal }) => {
  const {
    isOpen: isHelpModalOpen,
    onOpen: onHelpModalOpen,
    onClose: onHelpModalClose,
  } = useDisclosure();

  const handleOpenGuidanceModal = useCallback(() => {
    if (openGuidanceModal) {
      openGuidanceModal(onHelpModalOpen);
    }
  }, [openGuidanceModal, onHelpModalOpen]);

  useEffect(() => {
    handleOpenGuidanceModal();
  }, [handleOpenGuidanceModal]);

  return (
    <Modal
      backdrop={"blur"}
      isOpen={isHelpModalOpen}
      scrollBehavior={"inside"}
      onClose={onHelpModalClose}
      size={"lg"}
    >
      <ModalContent className="w-full xs:w-full md:w-2/3 h-auto max-h-full">
        <>
          <ModalHeader className="flex flex-col gap-1 text-black text-xl xs:text-lg w-full h-full">
            Welcome to Sustainability Hub!
          </ModalHeader>
          <ModalBody className="flex justify-start items-center w-full h-auto">
            <div className="w-full xs:w-11/12 md:w-5/6 h-full">
              <UserInfoCarousel />
            </div>
          </ModalBody>
          <ModalFooter className="flex flex-col xs:flex-row justify-end gap-2 md:gap-4">
            <Button
              as="a"
              onPress={onHelpModalClose}
              className="text-white bg-black w-full xs:w-full md:w-1/3 rounded-xl"
            >
              Got It!
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default UserGuidanceModal;