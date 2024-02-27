import React, { useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";

interface ModalProps {
  title?: string | null;
  isOpen: boolean;
  onClose: () => void;
  showAlert: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  showAlert,
}) => {
  const [presentAlert] = useIonAlert();

  const showAlertBeforeClose = () => {
    presentAlert({
      header:
        "Yaptığın değişiklikler kaybolacak. çıkmak istediğine emin misin?",
      buttons: [
        "hayır",
        {
          text: "evet",
          handler: () => {
            onClose();
          },
        },
      ],
    });
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={showAlert ? showAlertBeforeClose : onClose}>
              Close
            </IonButton>
          </IonButtons>
          {title && <IonTitle slot="start">{title}</IonTitle>}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{children}</IonContent>
    </IonModal>
  );
};

export default Modal;
