import React from "react";
import { Answer } from "../types/post";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonImg, IonLabel, IonRow } from "@ionic/react";
import { personCircle, thumbsUp, heart, send } from 'ionicons/icons';


interface AnswerCardProps {
  userName: string;
  title: string;
  description: string;
  likeCount: number;
  heartCount: number;
}


const AnswerCard: React.FC<AnswerCardProps> = ({ userName, title, description,
  likeCount, heartCount }) => {
  return <>
    <IonGrid >
      <IonRow>
        <IonCol size="2">
          <IonImg src={personCircle}></IonImg>
        </IonCol>
        <IonCol >
          <IonRow>
            <IonCol>{userName}</IonCol>
            <IonCol className="ion-text-right">29.12.2009 19:03</IonCol>
          </IonRow>
          <IonRow >
            <IonCard color="light" style={{
              width: '100%',
              height: '100%',
              margin: '0',
              padding: '0'
            }}>
              <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{description}</IonCardContent>
            </IonCard>
          </IonRow>


          <IonCard color="light" className="ion-no-margin">

            <IonButton fill="clear" color="danger">
              <IonIcon icon={heart} />
              <IonLabel>{heartCount}</IonLabel>
            </IonButton>

            <IonButton fill="clear" color="medium">
              <IonIcon icon={thumbsUp} />
              <IonLabel>{likeCount}</IonLabel>
            </IonButton>

            <IonButton fill="clear" color="dark">
              <IonIcon icon={send} />
            </IonButton>
          </IonCard>

        </IonCol>
      </IonRow>
    </IonGrid>
  </>;
};

export default AnswerCard;
