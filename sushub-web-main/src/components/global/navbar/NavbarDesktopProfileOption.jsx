import React, { useContext, useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User as UserAvatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Link from "next/link";
import { auth } from "../../../firebase.config";
import { signOut } from "firebase/auth";
import { AuthContext } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { ModeratorContext } from "@/context/ModeratorContext";
import { ProjectContext } from "@/context/ProjectContext";
import toast from "react-hot-toast";
import { HandleDataAccess } from "@/components/pages/onboarding/onboarding-functions/HandleDataAccess";
import { OrganizerContext } from "@/context/OrganizerContext";
import UserInfoCarousel from "@/components/pages/home/emblacarousel/UserInfoCarousel.jsx";
import UserGuidanceModal from "../user-guide/UserGuidanceModal";
import { User } from "@/app/schema/User";

const userPreferencesUpdated = () =>
  toast("User Preferences have been updated!", {
    position: "bottom-right",
    style: {
      color: "#fff",
      backgroundColor: "#000",
    },
  });

const signOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        toast(`You are signed out successfully.`, {
          position: "bottom-right",
          style: {
            color: "#fff",
            backgroundColor: "#000",
          },
        });
        resolve("User signed out successfully.");
      })
      .catch((error) => {
        toast("Oops! There was some error signing you out! Please try again!", {
          position: "bottom-right",
          style: {
            color: "#fff",
            backgroundColor: "#000",
          },
        });
        reject(error);
      });
  });
};

const NavbarDesktopProfileOption = () => {
  const { isOpen: isPreferencesOpen, onOpen: onPreferencesOpen, onClose: onPreferencesClose } = useDisclosure();
  const { isOpen: isHelpModalOpen, onOpen: onHelpModalOpen, onClose: onHelpModalClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");
  const { currentUser } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [languageValue, setLanguageValue] = useState(new Set([userInfo?.language?.toString()]));
  const { isModerator } = useContext(ModeratorContext);
  const moderatorContext = useContext(ModeratorContext);
  const projectContext = useContext(ProjectContext);
  const organizerContext = useContext(OrganizerContext);
  const dataAccess = new HandleDataAccess({
    moderatorContext,
    projectContext,
    organizerContext,
  });

  const refetchDataOnSignOut = async (currentUserStatus) => {
    await dataAccess.refetchDataOnUserStateChangeActivity(currentUserStatus);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        refetchDataOnSignOut(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const onClickPreferenceUpdates = () => {
    const currentValue = Array.from(languageValue)[0];
    const newValue = userInfo.language.toString();
    if (currentValue !== newValue) {
      User.updateUserLanguagePreferences(userInfo.user_email, parseInt(currentValue))
        .then((userResponse) => {
          if (userResponse !== null) {
            setUserInfo(userResponse);
            userPreferencesUpdated();
          } else {
            toast("Oops! An internal error occurred! Please try again!", {
              position: "bottom-right",
              style: {
                color: "#fff",
                backgroundColor: "#000",
              },
            });
          }
        })
        .catch((e) => {
          toast("Oops! There was an error in updating your preferences! Please try again!", {
            position: "bottom-right",
            style: {
              color: "#fff",
              backgroundColor: "#000",
            },
          });
        });
    }
  };

  useEffect(() => {
    if (userInfo?.language == 0 || userInfo?.language == 1) {
      const currentValue = Array.from(languageValue)[0];
      const newValue = userInfo.language.toString();
      if (currentValue !== newValue) {
        setLanguageValue(new Set([newValue]));
      }
    }
  }, [userInfo]);

  const handleOpenPreferences = () => {
    setBackdrop("blur");
    onPreferencesOpen();
  };

  const handleOpenHelp = () => {
    setBackdrop("blur");
    onHelpModalOpen();
  };

  if (userInfo == null) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 text-black">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <UserAvatar
            as="button"
            avatarProps={{
              isBordered: true,
              src: userInfo.user_profile,
            }}
            className="transition-transform"
            // description={userInfo.user_email}
            // name={userInfo.user_name}
            description={
              <span className="hidden lg:block">{userInfo.user_email}</span>
            }
            name={
              <span className="hidden lg:block">{userInfo.user_name}</span>
            }
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User Actions"
          variant="flat"
          onAction={(key) => {
            if (key === "logout") {
              handleSignOut();
            } else if (key === "settings") {
              handleOpenPreferences();
            } else if (key === "help_and_feedback") {
              handleOpenHelp();
            }
          }}
        >
          <DropdownItem key="profile" className="h-14 gap-2 text-black">
            <p className="font-normal">Signed in as</p>
            <p className="font-bold text-lg">{currentUser.displayName}</p>
          </DropdownItem>

          {isModerator ? (
            <DropdownItem key="team_settings" className="text-black">
              <Link href={"/profile/moderation"}>Moderation Panel</Link>
            </DropdownItem>
          ) : null}

          <DropdownItem key="settings" className="text-black">
            User Preferences
          </DropdownItem>

          <DropdownItem key="help_and_feedback" className="text-black">
            Information Guide
          </DropdownItem>

          <DropdownItem key="logout" color="danger" className="text-red-500">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Modal for User Preferences */}
      <Modal backdrop={backdrop} isOpen={isPreferencesOpen} onClose={onPreferencesClose} scrollBehavior={"inside"}>
        <ModalContent className="w-full md:w-2/3 lg:1/3 h-auto max-h-full">
          <ModalHeader className="flex flex-col gap-1 text-black text-xl">
            User Preferences
          </ModalHeader>
          <ModalBody className="flex justify-start items-center">
            <div className="text-black/60 text-sm p-2">
              Set your preferred language for the Sustainability Hub app. Your
              selection will personalize your experience the next time you use
              the app.
            </div>
            <Select
              variant="bordered"
              className="max-w-xs border-black bg-white text-black my-6"
              label="Select Your Preferred Language"
              selectedKeys={languageValue}
              onSelectionChange={setLanguageValue}
            >
              <SelectItem
                key="0"
                className="text-black font-bold"
                startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />}
              >
                German
              </SelectItem>
              <SelectItem
                key="1"
                className="text-black font-bold"
                startContent={<Avatar alt="UK" className="w-6 h-6" src="https://flagcdn.com/gb.svg" />}
              >
                English
              </SelectItem>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button className="text-black border-black w-1/3" variant="bordered" onPress={onPreferencesClose}>
              Close
            </Button>
            <Button className="text-white bg-black w-1/2" onPress={onPreferencesClose} onClick={onClickPreferenceUpdates}>
              Update Preferences
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal for Help & Feedback */}
      <Modal backdrop={backdrop} isOpen={isHelpModalOpen} onClose={onHelpModalClose} size={"xl"} scrollBehavior={"inside"}>
        <ModalContent className="w-full md:w-2/3 h-auto max-h-full">
          <ModalHeader className="flex flex-col gap-1 text-black text-xl">
            Welcome to Sustainability Hub!
          </ModalHeader>
          <ModalBody className="flex justify-start items-center">
            <div className="w-5/6">
              <UserInfoCarousel />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button as="a" onPress={onHelpModalClose} className="text-white bg-black w-full md:w-1/3">
              Got It!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NavbarDesktopProfileOption;
