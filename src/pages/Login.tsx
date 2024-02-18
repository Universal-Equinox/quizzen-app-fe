import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Giriş</IonCardTitle>
          </IonCardHeader>
          <IonCardContent aria-hidden="true">
            <IonList aria-hidden="true">
              <IonItem>
                <IonInput
                  labelPlacement="floating"
                  placeholder="hi@ionic.io"
                  type="email"
                >
                  <div slot="label">Email</div>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Password" type="password"></IonInput>
              </IonItem>
              <IonButton expand="block">Giriş</IonButton>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
