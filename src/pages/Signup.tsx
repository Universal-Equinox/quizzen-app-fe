import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonAlert, useIonRouter } from "@ionic/react";
import React from "react";
import SignupCard from "../components/SignupCard";
import { close } from "ionicons/icons";

const Signup: React.FC = () => {

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
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <SignupCard />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
