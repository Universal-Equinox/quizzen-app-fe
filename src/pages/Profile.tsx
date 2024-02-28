import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonTextarea,
  IonRow,
  IonCol,
  IonList,
  IonCard,
  IonCardHeader,
  IonGrid,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonChip,
  IonItemGroup,
  IonItemDivider,
  IonImg,
  IonCardSubtitle,
  IonIcon,
} from "@ionic/react";

import "./Profile.css";
import { chatbubble, chatbubbleOutline, heart, heartCircleOutline, heartOutline, person, thumbsDown, thumbsUp, thumbsUpOutline } from "ionicons/icons";
import ProfilePost from "../components/ProfilePost";

const Profile: React.FC = () => {
  function Save() {
    console.log("SAVE");
  }

  function LogOut() {
    console.log("LogOut");
  }

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>firstname lastname</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonAvatar>
                    <img src="https://avatars.githubusercontent.com/u/69048292?v=4" />
                  </IonAvatar>
                </IonCol>
                <IonCol size="8">
                  <IonRow>
                    <IonText>kullanıcı adı </IonText>
                  </IonRow>

                  <IonRow>
                    <IonText>E-posta</IonText>
                  </IonRow>

                  <IonRow>
                    <IonChip color="warning">#KPSS</IonChip>
                  </IonRow>
                </IonCol>
              </IonRow>
              <IonButton expand="block" href="/app/settings">
                Profili düzenle
              </IonButton>
              <IonRow></IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* answer card list */}
        <IonItemDivider>
          <IonLabel>Gönderiler</IonLabel>
        </IonItemDivider>

        <IonList lines="inset">
          <ProfilePost
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
