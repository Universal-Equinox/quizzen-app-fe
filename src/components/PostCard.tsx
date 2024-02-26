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
            <img
              alt="imgalt"
              src="https://i.pinimg.com/originals/32/82/21/328221397f7d20f615f9ee8cb48e4577.jpg"
            />
          </IonAvatar>
          <IonLabel>username_1</IonLabel>
          {/* <IonText>{new Date(post.createdDate).toLocaleTimeString()}</IonText> */}
          <IonText>4:04 PM</IonText>
        </IonItem>

        <IonNavLink routerDirection="forward" component={() => <PostDetail />}>
          {/* TODO: title özelliği kaldırılacak */}
          <IonCardTitle>Lorem ipsum dolor sit amet</IonCardTitle>
        </IonNavLink>
      </IonCardHeader>
      <IonNavLink routerDirection="forward" component={() => <PostDetail />}>
        <IonGrid>
          <IonRow>
            <IonImg src="https://www.matematikkolay.net/wp-content/uploads/2020/01/polinom_s4.gif"></IonImg>
            <IonImg src="https://www.matematikkolay.net/wp-content/uploads/2020/01/polinom_s1.gif"></IonImg>
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
          Lorem ipslor sit amet. doum dolLorem ipslor sit amet.or rem ipsumsit
          amet, Lo
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
