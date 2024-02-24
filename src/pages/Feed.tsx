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
import { getPosts } from "../feature/post/postSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import PostDetail from "./PostDetail";

const Feed: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const { posts, loading } = useAppSelector((state) => state.post);

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <IonPage>
      <IonHeader></IonHeader>
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
