import React, { useEffect } from "react";
import { IonRouterOutlet } from "@ionic/react";
import { CapacitorCookies } from "@capacitor/core";

type RequireAuthProps = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  useEffect(() => {
    const checkAccessToken = async () => {
      const cookies = await CapacitorCookies.getCookies();

      console.log(cookies.accessToken);
      if (!cookies.accessToken) {
        window.location.href = "/login";
      }
    };

    checkAccessToken();
  }, []);

  return <IonRouterOutlet>{children}</IonRouterOutlet>;
};

export default RequireAuth;
