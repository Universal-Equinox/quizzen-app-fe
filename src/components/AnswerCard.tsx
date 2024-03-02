import React, { useState } from "react";
import { Answer } from "../types/post";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personCircle, thumbsUp, heart, send } from "ionicons/icons";
import AnswerModal from "./AnswerModal";


interface AnswerCardProps {
  answer: Answer;
}


const AnswerCard: React.FC<AnswerCardProps> = ({ answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>
      <IonCard onClick={() => { setIsOpen(true) }} >
        <IonGrid>
          <IonRow>
            <IonCol size="2">
              <IonAvatar>
                <IonImg src={answer.user.profileImg}></IonImg>
              </IonAvatar>
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

      <AnswerModal isOpen={isOpen} onClose={closeModal} answer={answer} />
    </>
  );
};

export default AnswerCard;
