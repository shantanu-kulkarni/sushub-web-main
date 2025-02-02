"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import NavbarMenu from "@/components/global/navbar/NavbarMenu";
import Footer from "@/components/global/footer/Footer";
import { OpportunityProvider } from "@/context/OpportunityContext";
import { FeaturedProvider } from "@/context/FeaturedContext";
import { EventProvider } from "@/context/EventContext";
import { OrganizerProvider } from "@/context/OrganizerContext";
import { UserProvider } from "@/context/UserContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProjectProvider } from "@/context/ProjectContext";
import { ModeratorProvider } from "@/context/ModeratorContext";
import { PeopleProvider } from "@/context/PeopleContext";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import toast, { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import "./../components/global/loading-bar/loadingbar.css";
import CookieConsentManager from "@/components/global/cookies/CookieConsentManager";
import { isUnderMaintenance } from "@/utils/ApiToggle";
import Maintenance from "@/components/global/maintenance/Maintenance";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../sushub.png" type="image/png" />
      </Head>
      <body
        className={`${lato.className} mx-auto p-0 flex flex-col min-h-screen`}
      >
        <NextUIProvider>
          <AuthProvider>
            <ModeratorProvider>
              <PeopleProvider>
                <OrganizerProvider>
                  <ProjectProvider>
                    <OpportunityProvider>
                      <EventProvider>
                        <FeaturedProvider>
                          {!isUnderMaintenance ? <UserProvider>
                            <Toaster />
                            <NavbarMenu />
                            <ProgressBar
                              options={{ showSpinner: false }}
                              shallowRouting
                              style="./../components/global/loading-bar/loadingbar.css"
                            />
                            <CookieConsentManager />
                            <div className="flex-1">{children}</div>
                            <Footer />
                          </UserProvider>: <Maintenance />}
                        </FeaturedProvider>
                      </EventProvider>
                    </OpportunityProvider>
                  </ProjectProvider>
                </OrganizerProvider>
              </PeopleProvider>
            </ModeratorProvider>
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
