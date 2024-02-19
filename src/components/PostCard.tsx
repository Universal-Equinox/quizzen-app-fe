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

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt={post.user.id} src={post.user.profileImg} />
          </IonAvatar>
          <IonLabel>{post.user.userName}</IonLabel>
          <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText>
        </IonItem>

        <IonNavLink
          routerDirection="forward"
          component={() => <PostDetail post={post} />}
        >
          <IonCardTitle>{post.title}</IonCardTitle>
        </IonNavLink>
      </IonCardHeader>
      <IonNavLink
        routerDirection="forward"
        component={() => <PostDetail post={post} />}
      >
        <IonGrid>
          <IonRow>
            {post.images?.map((img) => (
              <IonImg key={img.url} src={img.url}></IonImg>
            ))}
          </IonRow>
        </IonGrid>
        <IonCardContent onClick={() => console.log("nav")}>
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
        </IonCardContent>
      </IonNavLink>

      <IonGrid>
        <IonRow>
          <IonChip color="warning">#{post.tags.exam}</IonChip>
          <IonChip color="tertiary">#{post.tags.subject}</IonChip>
          <IonChip color="secondary">#{post.tags.topic}</IonChip>
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
