import React, { useState } from "react";
import {
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonTextarea,
  IonImg,
  IonCard,
  IonCardContent,
} from "@ionic/react";

const NewPostCard: React.FC = () => {
  console.log("newpostcar");

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
    <>
      <IonCard>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonTextarea
                id="question-description"
                label="Açıklama"
                labelPlacement="floating"
                placeholder="Açıklama Girin"
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
            {
              (currentPhoto &&
                <IonItem>
                  <IonImg src={currentPhoto}></IonImg>
                </IonItem>
              )
            }

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
                <IonSelectOption value={LectureType.Science}>
                  Fen
                </IonSelectOption>
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
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default NewPostCard;
