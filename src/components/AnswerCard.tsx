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
  IonText,
} from "@ionic/react";
import { personCircle, thumbsUp, heart, send } from "ionicons/icons";

interface AnswerCardProps {
  answer: Answer;
}

const AnswerCard: React.FC<AnswerCardProps> = ({answer}) => {
  return (
    <>
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonImg src={answer.user.profileImg}></IonImg>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol>{answer.user.userName}</IonCol>
                <IonCol size="2">
                  <IonText>
                    {new Date(answer.createdDate).toLocaleTimeString()}
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
              
                <IonCardContent>
              {answer.text}
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
