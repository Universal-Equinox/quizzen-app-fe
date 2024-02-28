import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import LoginCard from "../components/LoginCard";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <LoginCard />
      </IonContent>
    </IonPage>
  );
};

export default Login;
