import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import React from "react";

const PostCard: React.FC = () => {
  return (
    <IonCard href="/postDetail">
      <IonCardHeader>
        <IonCardSubtitle>username ,date</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
          </IonCol>
          <IonCol>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonCardContent>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </IonCardContent>
      <IonGrid>
        <IonRow>
          <IonChip color="warning">#sınav</IonChip>
          <IonChip color="tertiary">#ders</IonChip>
          <IonChip color="secondary">#konu</IonChip>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonIcon
              size="large"
              color="danger"
              icon={heart}
              onClick={() => console.log("like")}
            />
            <IonIcon
              size="large"
              icon={chatbubbleOutline}
              onClick={() => console.log("like")}
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default PostCard;
