import {
  IonAvatar,
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
  IonNavLink,
  IonRow,
  IonText,
} from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import React from "react";
import PostDetail from "../pages/PostDetail";

interface PostCardProps {
  userName: string;
  userImage: string;
  commentDate: string;
  title: string;
  questionImg: string[];
  description: string;
  tags: string[];
  heartCount: number;
  likeCount: number;
}


const PostCard: React.FC<PostCardProps> = ({ userName, userImage, commentDate,
  title, questionImg, description, tags, heartCount, likeCount }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="imgalt"
              src={userImage}
            />
          </IonAvatar>
          <IonLabel>{userName}</IonLabel>
          {/* <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText> */}
          <IonText>{commentDate.toString()}</IonText>
        </IonItem>

        <IonNavLink routerDirection="forward" component={() => <PostDetail />}>
          {/* TODO: title özelliği kaldırılacak */}
          <IonCardTitle>{title}</IonCardTitle>
        </IonNavLink>
      </IonCardHeader>
      <IonNavLink routerDirection="forward" component={() => <PostDetail />}>
        <IonGrid>
          <IonRow>
            {questionImg.map((item, index) => (
              <IonImg key={index} src={item}></IonImg>
            ))}
          </IonRow>
        </IonGrid>
        <IonCardContent onClick={() => console.log("nav")}>
          {description}
        </IonCardContent>
      </IonNavLink>

      <IonGrid>
        <IonRow>
          {tags.map((item, index) => (
            <IonChip color="warning">{"#" + item}</IonChip>
          ))}
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCol>
              <IonIcon
                size="large"
                color="danger"
                icon={heart}
                onClick={() => console.log("like")}
              />
              <IonLabel>{heartCount}</IonLabel>
            </IonCol>
            <IonCol>
              <IonIcon
                size="large"
                icon={chatbubbleOutline}
                onClick={() => console.log("like")}
              />
              <IonLabel>{likeCount}</IonLabel>
            </IonCol>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default PostCard;
