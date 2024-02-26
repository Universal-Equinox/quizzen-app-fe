import {
  InputChangeEventDetail,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import SignupModal from "./SignupModal";
import { userData } from "../types/user";

interface SignupCardProps {
  onSignup: Function;
}

const SignupCard: React.FC<SignupCardProps> = ({ onSignup }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showDatetimModal, setshowDatetimModal] = useState(false);
  const [userData, setUserData] = useState<userData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
    gender: 0,
    examId: "",
  });

  const handleInputChange = (
    event: CustomEvent<InputChangeEventDetail>,
    field: keyof userData
  ) => {
    const value = (event.target as HTMLInputElement).value;
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Call signup function  with userData
    console.log(userData);
    onSignup(userData);
  };

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
                  name="firstName"
                  value={userData.firstName}
                  onIonChange={(e) => handleInputChange(e, "firstName")}
                  label="Adınız"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Adınızı girin"
                ></IonInput>
                <IonInput
                  name="lastName"
                  value={userData.lastName}
                  onIonChange={(e) => handleInputChange(e, "lastName")}
                  label="Soyadınız"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Soyadınızı girin"
                ></IonInput>
                <IonInput
                  name="email"
                  value={userData.email}
                  onIonChange={(e) => handleInputChange(e, "email")}
                  label="Email"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Email adresinizi girin"
                ></IonInput>
                <IonInput
                  name="password"
                  value={userData.password}
                  onIonChange={(e) => handleInputChange(e, "password")}
                  label="Şifre"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Şifrenizi girin"
                  type="password"
                ></IonInput>
                <IonInput
                  name="userName"
                  value={userData.userName}
                  onIonChange={(e) => handleInputChange(e, "userName")}
                  label="Kullanıcı Adı"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Kullanıcı adınızı girin"
                ></IonInput>
                <IonInput
                  name="gender"
                  value={userData.gender.toString()}
                  onIonChange={(e) => handleInputChange(e, "gender")}
                  label="Cinsiyet"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Cinsiyetinizi girin"
                  type="number"
                ></IonInput>
                <IonInput
                  name="examId"
                  value={userData.examId.toString()}
                  onIonChange={(e) => handleInputChange(e, "examId")}
                  label="Sınav ID"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Sınav ID'nizi girin"
                ></IonInput>
              </IonRow>
              <IonButton expand="block" onClick={handleSubmit}>
                Onayla
              </IonButton>
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
