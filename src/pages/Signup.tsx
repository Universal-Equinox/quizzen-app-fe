import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import SignupCard from "../components/SignupCard";

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <SignupCard />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
