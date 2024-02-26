import {
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonNavLink,
  IonPage,
  IonSpinner,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import PostDetail from "./PostDetail";
import QuizzenHeader from "../components/QuizzenHeader";

const Feed: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const currentDate = new Date(Date.now());
  const formattedDate = `${currentDate.toLocaleDateString("tr-TR", {
    dateStyle: "medium",
  })} ${currentDate.toLocaleTimeString("tr-TR", { timeStyle: "short" })}`;

  return (
    <IonPage>
      <QuizzenHeader />
      <IonContent fullscreen>
        {!loading ? (
          <IonList>
            <IonNavLink
              routerDirection="forward"
              component={() => <PostDetail />}
            >
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </IonNavLink>
          </IonList>
        ) : (
          <IonSpinner name="lines"></IonSpinner>
        )}

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