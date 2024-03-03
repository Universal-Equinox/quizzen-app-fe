import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
} from "@ionic/react";
import {
  returnDownBackOutline,
  returnDownForward,
  returnUpForward,
} from "ionicons/icons";
import React, { useState } from "react";

type NewAnswerCardProps = {
  title: string | undefined;
};

const NewAnswerCard: React.FC<NewAnswerCardProps> = ({ title }) => {
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
    <IonCard>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonIcon icon={returnDownForward}></IonIcon>
            <IonText>
              {title && title.length > 50 ? (
                <>{title.slice(0, 45)} ...</>
              ) : (
                <>{title}</>
              )}
            </IonText>
          </IonItem>
          <IonItem>
            <IonTextarea
              id="question-description"
              label="Cevabınız..."
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
          {currentPhoto && (
            <IonItem>
              <IonImg src={currentPhoto}></IonImg>
            </IonItem>
          )}

          <IonButton expand="block" color="primary">
            Soru Ekle
          </IonButton>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default NewAnswerCard;
