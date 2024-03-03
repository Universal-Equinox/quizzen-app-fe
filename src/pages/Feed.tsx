import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonNavLink,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import PostDetail from "./PostDetail";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPosts } from "../feature/post/postSlice";
import { chatbubble } from "ionicons/icons";

const Feed: React.FC = () => {
  const currentDate = new Date(Date.now());
  const formattedDate = `${currentDate.toLocaleDateString("tr-TR", {
    dateStyle: "medium",
  })} ${currentDate.toLocaleTimeString("tr-TR", { timeStyle: "short" })}`;

  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonText >QUIZZEN</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!loading ? (
          <IonList>
            {posts?.map((post) => (
              <IonItem key={post.id} routerDirection="forward">
                <PostCard key={post.id} post={post} />
              </IonItem>
            ))}
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
