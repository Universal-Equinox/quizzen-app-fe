import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAnswersByPostId, getPostById } from "../feature/post/postSlice";
import { useParams } from "react-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import PostDetailCard from "../components/PostDetailCard";
import AnswerCard from "../components/AnswerCard";
import { Post } from "../types/post";

interface RouteParams {
  postId: string;
}

type PostCardProps = {
  post: Post;
};

const PostDetail: React.FC = () => {
  // const { currentPostAnswers, loading } = useAppSelector(
  //   (state) => state.post
  // );
  const { postId } = useParams<RouteParams>();

  const [loading, setLoading] = useState(false);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getPostById(post.id));
  //   dispatch(getAnswersByPostId(post.id));
  // }, [dispatch, postId, post]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Soru</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <PostDetailCard />

        <IonList>
          <AnswerCard

          />

        </IonList>
      </IonContent>
    </>
  );
};

export default PostDetail;
