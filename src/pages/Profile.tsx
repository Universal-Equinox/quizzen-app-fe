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
} from "@ionic/react";

const Profile: React.FC = () => {

    function Save() {
        console.log('SAVE');
    }

    function LogOut() {
        console.log('LogOut');
    }


    const [currentPhoto, setCurrentPhoto] = useState<string | undefined>(undefined);

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
        }
        else {
            setCurrentPhoto(undefined);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow className="ion-align-items-center ion-justify-content-center ion-margin-bottom">
                    <IonAvatar>
                        {currentPhoto ? (
                            <img src={currentPhoto} alt="Avatar" />
                        ) : (
                            <img src="https://avatars.githubusercontent.com/u/69048292?v=4" alt="Placeholder Avatar" />
                        )}
                    </IonAvatar>

                    <IonItem>
                        <label className="ion-margin-start ion-margin-end ion-button"
                            style={{ border: '1px solid black', borderRadius: '15px', padding: '8px' }}
                        >
                            Profil Fotoğrafı Seç
                            <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                        </label>
                    </IonItem>
                </IonRow>


                <IonItem>
                    <IonLabel position="floating">Ad</IonLabel>
                    <IonInput type="text" />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Soyad</IonLabel>
                    <IonInput type="text" />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Kullanıcı Adı</IonLabel>
                    <IonInput type="text" />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Şifre</IonLabel>
                    <IonInput type="password" />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">E:Mail</IonLabel>
                    <IonInput type="email" />
                </IonItem>

                <IonButton expand="full" style={{ marginTop: '25px' }} onClick={Save}>
                    Kaydet
                </IonButton>

                <IonButton expand="full" color="danger" onClick={LogOut}>
                    Çıkış Yap
                </IonButton>

            </IonContent>
        </IonPage>
    );
};

export default Profile;
