import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";
import SignupCard from "../components/SignupCard";
import LoginCard from "../components/LoginCard";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/">geri</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <LoginCard />
      </IonContent>
    </IonPage>
  );
};

export default Login;
