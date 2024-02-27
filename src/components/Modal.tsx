import React, { useEffect, useRef, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { close } from "ionicons/icons";

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
          <IonButtons slot="start">
            <IonButton onClick={showAlert ? showAlertBeforeClose : onClose}>
              <IonIcon icon={close}></IonIcon>
            </IonButton>
          </IonButtons>
          {title && <IonTitle>{title}</IonTitle>}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{children}</IonContent>
    </IonModal>
  );
};

export default Modal;
