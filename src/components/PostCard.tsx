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

const PostCard: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img alt="imgalt" src="imgurl" />
          </IonAvatar>
          <IonLabel>"username"</IonLabel>
          {/* <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText> */}
          <IonText>date time</IonText>
        </IonItem>

        <IonNavLink
          routerDirection="forward"
          component={() => <PostDetail />}
        >
          <IonCardTitle>tilte</IonCardTitle>
        </IonNavLink>
      </IonCardHeader>
      <IonNavLink
        routerDirection="forward"
        component={() => <PostDetail />}
      >
        <IonGrid>
          <IonRow>
            
              <IonImg  src="imgurl"></IonImg>
            
          </IonRow>
        </IonGrid>
        <IonCardContent onClick={() => console.log("nav")}>
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

          desc
        </IonCardContent>
      </IonNavLink>

      <IonGrid>
        <IonRow>
          <IonChip color="warning">#KPSS</IonChip>
          <IonChip color="tertiary">#mat</IonChip>
          <IonChip color="secondary">#polinomlar</IonChip>
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
