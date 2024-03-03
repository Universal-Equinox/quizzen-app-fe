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
import { chatbubbleOutline, heart, personCircle, heartOutline } from "ionicons/icons";
import React from "react";
import { Post } from "../types/post";
import PostDetail from "../pages/PostDetail";
import "./PostCard.css";

type PostCardProps = {
  post: Post;
};

function LikeFun(imgURL: string) {
  console.log(imgURL);
  {/* BURAYA POST ID İLE LİKE SAYISINI ARTTIRIP AZALTMA İŞŞEMİ YAPILACAK */ }
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <IonCard
      style={{ width: "100%", height: "100%" }}
      className="ion-no-margin"
    >
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            {post.user.profileImg ? (
              <img alt="imgalt" src={post.user.profileImg} />
            ) : (
              <IonIcon
                style={{ width: "100%", height: "100%" }}
                icon={personCircle}
              ></IonIcon>
            )}
          </IonAvatar>
          <IonLabel>{post.user.userName}</IonLabel>
          <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText>
          {/* <IonText>4:04 PM</IonText> */}
        </IonItem>

        <IonCardTitle>
          {" "}
          {post.description.length > 200 ? (
            <>
              {post.description.slice(0, 100)}
              <a href={`app/post/${post.id}`}>
                <strong> ...devamını oku</strong>
              </a>
            </>
          ) : (
            <a
              style={{
                textDecoration: "none",
              }}
              href={`app/post/${post.id}`}
            >
              {post.description}
            </a>
          )}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent onClick={() => console.log("nav")}>
        <IonGrid>
          <IonRow>
            {post.images &&
              post.images.map((img) => (
                <IonCol key={img.url}>
                  <IonImg className="ion-img" src={img.url}></IonImg>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonCardContent>

      <IonGrid>
        <IonRow>
          <IonChip color="warning">#{post.tags.exam}</IonChip>
          <IonChip color="tertiary">#{post.tags.subject}</IonChip>
          <IonChip color="secondary">#{post.tags.topic}</IonChip>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton
              fill="clear"
              color="danger"
              onClick={() => LikeFun(post.user.profileImg)}
            >
              <IonIcon icon={heart} />
              <IonLabel>2</IonLabel>
            </IonButton>

            <IonButton fill="clear">
              <IonIcon icon={chatbubbleOutline} />
              <IonLabel>2</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default PostCard;
