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
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPosts } from "../feature/post/postSlice";

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
      <IonContent fullscreen>
        {!loading ? (
          <IonList>
            {posts?.map((post) => (
              <IonNavLink
                key={post.id}
                routerDirection="forward"
                component={() => <PostDetail key={post.id} post={post} />}
              >
                <PostCard key={post.id} post={post} />
              </IonNavLink>
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
