import {
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import PostCard from "../components/PostCard";

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        <IonList>
          <PostCard />
          <PostCard />
          <PostCard />
        </IonList>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent
            loadingText="Please wait..."
            loadingSpinner="bubbles"
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
