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
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import toast from "react-hot-toast";
import { Project } from "@/app/schema/Project";
import { ProjectContext } from "@/context/ProjectContext";

const ArchiveProjectButton = ({ projectItem, isProjectArchived }) => {
  const { setProject, setVerifiedProjects, setUnverifiedProjects } =
    useContext(ProjectContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const notify = ({ projectTitle, isProjectArchived }) => {
    toast(
      `Project ${projectTitle} has been ${
        isProjectArchived ? "unarchived" : "archived"
      }!`,
      {
        position: "bottom-right",
        style: {
          color: "#fff",
          backgroundColor: "#000",
        },
      }
    );
  };

  const RemoveConfirmationModal = ({ isOpen, onOpenChange }) => {
    return (
      <>
        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-black text-xl">{`${
                  isProjectArchived ? "Unarchive " : "Archive "
                }${projectItem.project_title}`}</ModalHeader>
                <ModalBody className="text-black/60 text-sm font-medium">
                  <p>{`Are you sure you wish to ${
                    isProjectArchived ? "unarchive " : "archive "
                  } this project?`}</p>
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
                        !isProjectArchived
                          ? Project.moveProjectToArchived(
                              projectItem.project_id
                            )
                              .then((updatedProjectList) => {
                                const { individualData, mergedData } =
                                  updatedProjectList;
                                setProject(mergedData);
                                setVerifiedProjects(individualData["verified"]);
                                setUnverifiedProjects(
                                  individualData["unverified"]
                                );
                                notify({
                                  projectTitle: projectItem.project_title,
                                });
                              })
                              .catch((e) => {
                                console.error(
                                  "There was an error in getting the updated projects list:",
                                  e
                                );
                              })
                              .finally(() => setLoading(false))
                          : Project.moveProjectToUnarchived(
                              projectItem.project_id
                            )
                              .then((updatedProjectList) => {
                                const { individualData, mergedData } =
                                  updatedProjectList;
                                setProject(mergedData);
                                setVerifiedProjects(individualData["verified"]);
                                setUnverifiedProjects(
                                  individualData["unverified"]
                                );
                                notify({
                                  projectTitle: projectItem.project_title,
                                });
                              })
                              .catch((e) => {
                                console.error(
                                  "There was an error in getting the updated projects list:",
                                  e
                                );
                              })
                              .finally(() => setLoading(false));
                      }}
                      className="w-full bg-black rounded-xl text-white"
                    >
                      {isProjectArchived ? "Unarchive" : "Archive"}
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
          isDisabled={loading}
          variant="flat"
          onPress={onOpen}
          className="bg-black text-white w-full rounded-xl h-12"
          startContent={
            loading ? (
              <Spinner size="sm" color="white" />
            ) : isProjectArchived ? (
              <MdOutlineUnarchive size={20} />
            ) : (
              <MdOutlineArchive size={20} />
            )
          }
        >
          {isProjectArchived ? "Unarchive Project" : "Archive Project"}
        </Button>
        <RemoveConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </div>
  );
};

export default ArchiveProjectButton;
