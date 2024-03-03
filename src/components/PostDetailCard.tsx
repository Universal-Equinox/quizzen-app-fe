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
  IonFab,
  IonFabButton,
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
import { add, chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import { Post } from "../types/post";

type PostCardProps = {
  post: Post;
};

const PostDetailCard: React.FC<PostCardProps> = ({ post }) => {
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
          <IonLabel>{post.user.userName}</IonLabel>
          <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText>
          {/* <IonText>4:04 PM</IonText> */}
        </IonItem>

        {/* TODO: title özelliği kaldırılacak */}
        <IonCardTitle>{post.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            {post.images?.map((img, index) => (
              <IonImg
                id="open-modal"
                key={index}
                src={img.url}
                onClick={() => handleImageClick(img.url)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </IonRow>
        </IonGrid>
        <IonRow>{post.description}</IonRow>
      </IonCardContent>

      <IonGrid>
        <IonRow>
          <IonChip color="warning">#{post.tags.exam}</IonChip>
          <IonChip color="tertiary">#{post.tags.subject}</IonChip>
          <IonChip color="secondary">#{post.tags.topic}</IonChip>
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
