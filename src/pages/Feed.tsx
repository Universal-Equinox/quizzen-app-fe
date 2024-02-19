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
import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import { getPosts } from "../feature/post/postSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import PostDetail from "./PostDetail";

const Feed: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent fullscreen>
        {!loading ? (
          <IonList>
            {posts?.map((p) => (
              // <IonNavLink routerDirection="forward" component={() => <PostDetail post={p}/>}>
                <PostCard key={p.id} post={p} />
              // </IonNavLink>
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
