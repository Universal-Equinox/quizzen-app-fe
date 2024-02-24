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
            <img alt="text" src="imgId" />
          </IonAvatar>
          <IonLabel>userName</IonLabel>
          {/* <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText> */}
          <IonText>date time</IonText>
        </IonItem>

        <IonRow>
          <IonChip color="warning">#KPSS</IonChip>
          <IonChip color="tertiary">#mat-1</IonChip>
          <IonChip color="secondary">#polinomlar</IonChip>
        </IonRow>

        <IonCardTitle>title</IonCardTitle>
      </IonCardHeader>
      <IonGrid>
        <IonRow>
         
            <IonImg
              id="open-modal"
              // key={index}
              src="imgurl"
              onClick={() => handleImageClick("img.url")}
              style={{ cursor: "pointer" }}
            />
         
        </IonRow>
      </IonGrid>
      <IonCardContent onClick={() => console.log("nav")}>
        post desc
      </IonCardContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonIcon
              size="large"
              color="danger"
              icon={heart}
              onClick={() => console.log("like")}
            />
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonModal
        ref={modal}
        isOpen={!!selectedImage}
        onDidDismiss={handleCloseModal}
        showBackdrop={true}
      >
        <IonContent>
          {selectedImage && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleCloseModal}
            >
              <img src={selectedImage} alt="Selected" />
            </div>
          )}
        </IonContent>
      </IonModal>
    </IonCard>
  );
};

export default PostDetailCard;
