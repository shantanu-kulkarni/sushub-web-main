import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useInternetConnection() {
  const [isConnected, setIsConnected] = useState(true);
  const [offlinePath, setOfflinePath] = useState("");
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateConnectionStatus = () => {
      setIsConnected(navigator.onLine);
    };

    const handleOnline = () => {
      setIsConnected(true);
    };

    const handleOffline = () => {
      setIsConnected(false);
      if (path !== "/no-internet") {
        setOfflinePath(path);
      }
    };

    // Checking connection status and setting initial state
    updateConnectionStatus();

    // Adding event listeners for online and offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [path]);

  useEffect(() => {
    if (isConnected && offlinePath && path === "/no-internet") {
      router.replace(offlinePath);
    } else if (isConnected && path === "/no-internet") {
      router.replace("/");
      setOfflinePath("");
    } else if (!isConnected && path !== "/no-internet") {
      router.replace("/no-internet");
    }
  }, [isConnected, offlinePath, path, router]);

  return isConnected;
}
