import {
  IonApp,
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { person, personOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const AccountSettings: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState<string | undefined>(
    undefined
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setCurrentPhoto(dataUrl);
      };
      reader.readAsDataURL(file);
    } else {
      setCurrentPhoto(undefined);
    }
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ayarlar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonAvatar style={{ width: '150px', height: '150px' }}>
              {currentPhoto ? (
                <IonImg src={currentPhoto} alt="Avatar" />
              )
                :
                (<IonImg src={person}></IonImg>)
              }
            </IonAvatar>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonItem>
              <IonButton fill="clear" size="small">
                <input type="file" onChange={handleFileChange} />
              </IonButton>
            </IonItem>
          </IonRow>
          <IonRow >
            <IonList>
              <IonItem>
                <IonLabel position="floating">Ad</IonLabel>
                <IonInput placeholder="Adınızı girin"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Soyad</IonLabel>
                <IonInput placeholder="Soyadınızı girin"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">E:Mail</IonLabel>
                <IonInput placeholder="Mailinizi girin"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Kullanıcı Adı</IonLabel>
                <IonInput placeholder="Kullanıcı adınızı girin"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Şifre</IonLabel>
                <IonInput type="password" placeholder="Şifrenizi girin"></IonInput>
              </IonItem>
            </IonList>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonButton>Kaydet</IonButton>
          </IonRow>

        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default AccountSettings;
