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
  IonRouterLink,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { useLoginMutation } from "../feature/auth/authApiSlice";
import { setCredentials } from "../feature/auth/authSlice";

type LoginCardProps = {
  onSubmit: Function;
};

const LoginCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useIonRouter();
  const [login] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await login({
        email: email,
        password: password,
      }).unwrap();

      if (data.accessToken) {
        await dispatch(setCredentials({accessToken: data.accessToken}));
        router.push("/app/feed");
      }
    } catch (error) {}
  };

  const handleEmailChange = (e: CustomEvent<InputChangeEventDetail>) => {
    const value = (e.target as HTMLInputElement).value;
    setEmail(value);
    setEmailError("");
  };

  const handlePasswordChange = (e: CustomEvent<InputChangeEventDetail>) => {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value);
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
                  onIonChange={handleEmailChange}
                  // onBlur={validateEmail}
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
                  onIonChange={handlePasswordChange}
                  // onBlur={validatePassword}
                ></IonInput>
                {passwordError && (
                  <p style={{ color: "red" }}>{passwordError}</p>
                )}
              </IonRow>
              <IonRow>
                <IonRouterLink>şifremi unuttum</IonRouterLink>
              </IonRow>
              <IonButton expand="block" onClick={() => handleSubmit()}>
                Giriş
              </IonButton>

              <IonRow>
                henüz hesabınız yok mu?
                <IonRouterLink href="/signup">Giriş</IonRouterLink>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default LoginCard;
