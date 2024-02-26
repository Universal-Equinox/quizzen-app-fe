import React from "react";
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
        <LoginCard />
      </IonContent>
    </IonModal>
  );
};

export default LoginModal;
