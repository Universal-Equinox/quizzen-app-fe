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
import { Post } from "../types/post";
import PostDetail from "../pages/PostDetail";
import "./PostCard.css";

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="imgalt" src={post.user.profileImg} />
          </IonAvatar>
          <IonLabel>{post.user.userName}</IonLabel>
          <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText>
          {/* <IonText>4:04 PM</IonText> */}
        </IonItem>

        <IonNavLink
          routerDirection="forward"
          component={() => <PostDetail post={post} />}
        >
          {/* TODO: title özelliği kaldırılacak */}
          <IonCardTitle>
            {" "}
            {post.description.length > 200 ? (
              <>
                {post.description.slice(0, 100)}
                <a>
                  <strong> ...devamını oku</strong>
                </a>
              </>
            ) : (
              post.description
            )}
          </IonCardTitle>
        </IonNavLink>
      </IonCardHeader>
      <IonNavLink
        routerDirection="forward"
        component={() => <PostDetail post={post} />}
      >
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
      </IonNavLink>

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
          <IonCol size="1">
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
