import React, { useRef, useState } from "react";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
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
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import { Post } from "../types/post";

type PostCardProps = {
  post: Post;
};

const PostDetailCard: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const modal = useRef<HTMLIonModalElement>(null);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="imgalt"
              src="https://i.pinimg.com/originals/32/82/21/328221397f7d20f615f9ee8cb48e4577.jpg"
            />
          </IonAvatar>
          <IonLabel>username_1</IonLabel>
          {/* <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText> */}
          <IonText>4:04 PM</IonText>
        </IonItem>

        {/* TODO: title özelliği kaldırılacak */}
        <IonCardTitle>Lorem ipsum dolor sit amet</IonCardTitle>
      </IonCardHeader>
      <IonCardContent onClick={() => console.log("nav")}>
        <IonGrid>
          <IonRow>
            <IonImg src="https://www.matematikkolay.net/wp-content/uploads/2020/01/polinom_s4.gif"></IonImg>
            <IonImg src="https://www.matematikkolay.net/wp-content/uploads/2020/01/polinom_s1.gif"></IonImg>
          </IonRow>
        </IonGrid>
        <IonRow>
          {/* {post.description.length > 200 ? (
          <>
              {post.description.slice(0, 100)}
              <a>
                <strong> ...devamını oku</strong>
                </a>
                </>
                ) : (
                  post.description
                )} */}
          Lorem ipslor sit amet. doum dolLorem ipslor sit amet.or rem ipsumsit
          amet, Lo
        </IonRow>
      </IonCardContent>

      <IonGrid>
        <IonRow>
          <IonChip color="warning">#KPSS</IonChip>
          <IonChip color="tertiary">#mat</IonChip>
          <IonChip color="secondary">#polinomlar</IonChip>
        </IonRow>
        <IonRow>
          <IonCol size="1">
            <IonButton fill="clear" color="danger">
              <IonIcon icon={heart} />
              <IonLabel>2</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default PostDetailCard;
