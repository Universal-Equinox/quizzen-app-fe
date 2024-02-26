import React from "react";
import { Answer } from "../types/post";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { personCircle, thumbsUp, heart, send } from "ionicons/icons";

interface AnswerCardProps {
  answer: Answer;
}

const AnswerCard: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonImg src={personCircle}></IonImg>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol>user_name</IonCol>
                <IonCol size="2">8:36 AM</IonCol>
              </IonRow>
              <IonRow>
                <IonCardHeader>
                  <IonCardTitle>Delta Kök Bulma Sorunu</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Bence hata senin delta formülünde. -b yerine +b kullan Wtf
                  salladım.
                </IonCardContent>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="1">
              <IonButton fill="clear" color="danger">
                <IonIcon icon={heart} />
                <IonLabel>2</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="1">
              <IonButton fill="clear">
                <IonIcon icon={send} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </>
  );
};

export default AnswerCard;
