import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonList,
  IonRouterLink,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import Modal from "./Modal";
import SignupCard from "./SignupCard";

const LoginCard: React.FC = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
    
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Geçerli bir email adresi giriniz");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Şifreniz en az 6 karakter olmalıdır");
    }
  };

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Giriş</IonCardTitle>
        </IonCardHeader>
        <IonCardContent aria-hidden="true">
          <IonGrid aria-hidden="true">
            <IonCol>
              <IonRow>
                <IonInput
                  label="Email"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="mail adresinizi girin"
                  value={email}
                  onIonChange={() => handleEmailChange}
                  onBlur={validateEmail}
                ></IonInput>
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </IonRow>
              <IonRow>
                <IonInput
                  label="Password"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="parolanızı girin"
                  type="password"
                  value={password}
                  onIonChange={() => handlePasswordChange}
                  onBlur={validatePassword}
                ></IonInput>
                {passwordError && (
                  <p style={{ color: "red" }}>{passwordError}</p>
                )}
              </IonRow>
              <IonRow>
                <IonRouterLink>şifremi unuttum</IonRouterLink>
              </IonRow>
              <IonButton expand="block">Giriş</IonButton>

              <IonRow>
                henüz hesabınız yok mu?
                <IonRouterLink onClick={() => setShowSignupModal(true)}>
                  {" "}
                  kaydol
                </IonRouterLink>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonCardContent>
      </IonCard>
      {/* <SignupModal isOpen={showSignupModal} onClose={() => setshowSignupModal(false)} /> */}

      <Modal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        showAlert={true}
      >
        <SignupCard />
      </Modal>
    </>
  );
};

export default LoginCard;
