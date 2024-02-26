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

const Feed: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const currentDate = new Date(Date.now());
  const formattedDate = `${currentDate.toLocaleDateString('tr-TR', { dateStyle: 'medium' })} ${currentDate.toLocaleTimeString('tr-TR', { timeStyle: 'short' })}`;
  

  return (
    <IonPage>
      <IonContent fullscreen>
        {!loading ? (
          <IonList>
            <IonNavLink
              routerDirection="forward"
              component={() => <PostDetail />}
            >
              <PostCard
                userName="Sukrubeyy"
                userImage="https://avatars.githubusercontent.com/u/69048292?v=4"
                commentDate={formattedDate}
                title="Soruyu çözemedim help"
                questionImg={[
                  "https://www.matematikkolay.net/wp-content/uploads/2020/01/polinom_s4.gif",
                  "https://www.matematikkolay.net/wp-content/uploads/2020/01/polinom_s1.gif"
                ]}
                description="Çözemiyorum HELPPPPP, kök bulamıyorum. !!!"
                tags={[
                  "Kpss",
                  "YKS"
                ]}
                heartCount={15}
                likeCount={24}
              />
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
