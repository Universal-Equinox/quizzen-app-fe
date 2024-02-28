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
import NewPostCard from "../components/NewPostCard";
import { close } from "ionicons/icons";

const NewPost: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

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
          <IonTitle>Yeni Soru</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <NewPostCard />
      </IonContent>
    </IonPage>
  );
};

export default NewPost;
