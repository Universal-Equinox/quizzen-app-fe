import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonHeader,
  IonTitle,
} from "@ionic/react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onClose}>geri</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <SignupCard />
      </IonContent>
    </IonModal>
  );
};

export default SignupModal;
