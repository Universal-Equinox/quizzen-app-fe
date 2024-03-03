import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import LoginCard from "../components/LoginCard";
import { close } from "ionicons/icons";

const Login: React.FC = () => {
  const router = useIonRouter();
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
            router.goBack();
          },
        },
      ],
    });
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={showAlertBeforeClose}>
              <IonIcon icon={close}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LoginCard  />
      </IonContent>
    </IonPage>
  );
};

export default Login;
