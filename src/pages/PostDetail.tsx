import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAnswersByPostId, getPostById } from "../feature/post/postSlice";
import { RouteComponentProps, useParams } from "react-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from "@ionic/react";
import PostDetailCard from "../components/PostDetailCard";
import AnswerCard from "../components/AnswerCard";
import { Post } from "../types/post";
import { add } from "ionicons/icons";
import Modal from "../components/Modal";
import NewAnswerCard from "../components/NewAnswerCard";

interface RouteParams
  extends RouteComponentProps<{
    id: string;
  }> {}

const PostDetail: React.FC<RouteParams> = ({ match }) => {
  const dispatch = useAppDispatch();
  const { currentPost, currentPostAnswers, loading } = useAppSelector(
    (state) => state.post
  );
  const id = match.params.id;

  const [isOpenNewAnswerModal, setOpenNewAnswerModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPostById(id));
      await dispatch(getAnswersByPostId(id));
    };

    fetchData();
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/feed"></IonBackButton>
          </IonButtons>
          <IonTitle>Soru</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loading ? (
          <IonSpinner name="lines"></IonSpinner>
        ) : currentPost ? (
          <PostDetailCard post={currentPost} />
        ) : null}
        <IonList>
          {loading ? (
            <IonSpinner name="lines"></IonSpinner>
          ) : currentPostAnswers ? (
            currentPostAnswers.map((ans) => (
              <AnswerCard key={ans.id} answer={ans} />
            ))
          ) : null}
        </IonList>
      </IonContent>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          onClick={() => setOpenNewAnswerModal(true)}
        >
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
      <Modal
        title={"Cevapla:"}
        isOpen={isOpenNewAnswerModal}
        onClose={() => setOpenNewAnswerModal(false)}
        showAlert={true}
      >
        <NewAnswerCard title={currentPost?.description}/>
      </Modal>
    </IonPage>
  );
};

export default PostDetail;
