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
import { useAppDispatch } from "../app/hooks";
import { useRegisterMutation } from "../feature/auth/authApiSlice";
import { userData } from "../types/user";
import { UseDispatch } from "react-redux";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleSignup = (userData: userData) => {
    console.log("handleSignup: ", userData);
    register(userData);
  };
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
        <SignupCard onSignup={handleSignup} />
      </IonContent>
    </IonModal>
  );
};

export default SignupModal;
