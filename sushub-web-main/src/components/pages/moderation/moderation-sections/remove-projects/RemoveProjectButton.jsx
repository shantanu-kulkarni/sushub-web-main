import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spinner,
} from "@nextui-org/react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import { Project } from "@/app/schema/Project";
import { ProjectContext } from "@/context/ProjectContext";
import { OrganizerContext } from "@/context/OrganizerContext";
import { useRouter } from "next/navigation";

const RemoveProjectButton = ({ projectItem, isDetailPage = false }) => {
  const { setProject, setUnverifiedProjects, setVerifiedProjects } =
    useContext(ProjectContext);
  const router = useRouter();
  const {
    organizer,
    unverifiedOrganizer,
    setOrganizer,
    setVerifiedOrganizer,
    setUnverifiedOrganizer,
  } = useContext(OrganizerContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const notify = ({ projectTitle }) => {
    toast(`Project ${projectTitle} has been deleted!`, {
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
                <ModalHeader className="flex flex-col gap-1 text-black text-xl">{`Delete ${projectItem.project_title}`}</ModalHeader>
                <ModalBody className="text-black/60 text-sm font-medium">
                  <p>
                    {`Are you sure you wish to delete this project? Once you delete this project, you cannot recover it back.`}
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
                      isDisabled={loading}
                      onPress={() => {
                        onClose();
                        setLoading(true);
                        // First, route the user to the list page
                        if (isDetailPage) {
                          router.push("/project/list");
                        }
                        // Then, perform the delete operation
                        Project.removeProject(
                          projectItem.project_id,
                          organizer,
                          unverifiedOrganizer,
                          setOrganizer,
                          setVerifiedOrganizer,
                          setUnverifiedOrganizer
                        )
                          .then((updatedProjectList) => {
                            const { individualData, mergedData } =
                              updatedProjectList;
                            setProject(mergedData);
                            setVerifiedProjects(individualData["verified"]);
                            setUnverifiedProjects(individualData["unverified"]);
                            notify({ projectTitle: projectItem.project_title });
                          })
                          .catch((e) => {
                            console.error(
                              "There was an error in getting the updated projects list:",
                              e
                            );
                          })
                          .finally(() => setLoading(false));
                      }}
                      className="w-full bg-red-600 rounded-xl text-white"
                    >
                      {loading ? (
                        <Spinner size="sm" color="white" />
                      ) : (
                        "Delete Project"
                      )}
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
    <div className="flex flex-row text-sm font-medium w-full justify-center items-center">
      <div className="w-full" onClick={(event) => event.stopPropagation()}>
        <Button
          variant="flat"
          onPress={onOpen}
          isDisabled={loading}
          className="bg-red-600 text-white w-full rounded-xl h-12"
          startContent={
            loading ? (
              <Spinner size="sm" color="white" />
            ) : (
              <IoMdRemoveCircleOutline size={20} />
            )
          }
        >
          {loading ? "Processing..." : "Remove Project"}
        </Button>
        <RemoveConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </div>
  );
};

export default RemoveProjectButton;
