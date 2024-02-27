import {
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonList,
  IonNavLink,
  IonPage,
  IonSelect,
  IonSelectOption,
  SelectChangeEventDetail,
  IonSpinner,
  IonButton,
  IonTextarea,
  IonImg,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import PostDetail from "./PostDetail";
import QuizzenHeader from "../components/QuizzenHeader";

const NewPost: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [selectedLecture, setSelectedLecture] = useState<
    LectureType | undefined
  >(undefined);
  enum LectureType {
    None,
    Math,
    Physics,
    Science,
    History,
  }
  let selectLectureType = LectureType.None;

  const currentDate = new Date(Date.now());
  const formattedDate = `${currentDate.toLocaleDateString("tr-TR", {
    dateStyle: "medium",
  })} ${currentDate.toLocaleTimeString("tr-TR", { timeStyle: "short" })}`;
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
      <QuizzenHeader />
      <IonContent>
        <IonList>
          <IonItem>
            <IonTextarea
              id="question-description"
              label="açıklama"
              labelPlacement="floating"
              placeholder="açıklama girin"
              fill="outline"
              clearOnEdit={true}
              autoGrow={true}
              counter={true}
              maxlength={200}
              counterFormatter={(inputLength, maxLength) =>
                `${maxLength - inputLength}`
              }
            ></IonTextarea>
          </IonItem>
          <IonItem>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </IonItem>

          {currentPhoto && (
            <IonItem>
              <IonImg src={currentPhoto}></IonImg>
            </IonItem>
          )}
          <IonItem>
            <IonSelect
              label="Ders Seç"
              placeholder="Dersler"
              onIonChange={(e) => setSelectedLecture(e.detail.value)}
            >
              <IonSelectOption value={LectureType.Math}>
                Matematik
              </IonSelectOption>
              <IonSelectOption value={LectureType.Physics}>
                Fizik
              </IonSelectOption>
              <IonSelectOption value={LectureType.Science}>Fen</IonSelectOption>
              <IonSelectOption value={LectureType.History}>
                Tarih
              </IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonSelect
              label="Konu Seç"
              placeholder="Konular"
              disabled={!selectedLecture}
            >
              <IonSelectOption value="">Denklemler</IonSelectOption>
              <IonSelectOption value="">Polinomlar</IonSelectOption>
              <IonSelectOption value="">Eşitsizlikler</IonSelectOption>
            </IonSelect>
          </IonItem>


          <IonButton expand="block" color="primary">
            Soru Ekle
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default NewPost;
