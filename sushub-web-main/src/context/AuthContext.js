"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";
import { authData } from "@/utils/AuthData";
import { useInternetConnection } from "@/hooks/useInternetConnection";
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const isConnected = useInternetConnection();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        //console.log("User Auth:", user);
        setCurrentUser(user);
        setLoading(false);
      });

      return unsubscribe;
    } else {
      setCurrentUser(authData);
      setLoading(false);
    }
  }, [isConnected]);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
