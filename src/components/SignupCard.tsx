import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonRouterLink,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";
import SignupModal from "./SignupModal";

const SignupCard: React.FC = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showDatetimModal, setshowDatetimModal] = useState(false);

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Kayıt</IonCardTitle>
        </IonCardHeader>
        <IonCardContent aria-hidden="true">
          <IonGrid aria-hidden="true">
            <IonCol>
              <IonRow>
                <IonInput
                  label="Adınız"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="mail adresinizi girin"
                ></IonInput>
                <IonInput
                  label="Soyadınız"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="mail adresinizi girin"
                ></IonInput>
                <IonInput
                  label="Telefon"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="mail adresinizi girin"
                ></IonInput>
                <IonInput
                  label="Email"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="mail adresinizi girin"
                ></IonInput>
                <IonInput
                  label="Password"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="parolanızı girin"
                  type="password"
                ></IonInput>
                <IonInput
                  label="Password repeat"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="parolanızı girin"
                  type="password"
                ></IonInput>

               
              </IonRow>

              <IonButton expand="block">Onayla</IonButton>
            </IonCol>
          </IonGrid>
        </IonCardContent>
      </IonCard>
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />
     
    </>
  );
};

export default SignupCard;
