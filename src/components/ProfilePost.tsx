import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonIcon, IonItem, IonLabel, IonRow } from "@ionic/react";
import { chatbubbleOutline, heartOutline } from "ionicons/icons";
import { ProfilePostCard } from "../types/profilePostCard";

type ProfilePost = {
    post: ProfilePostCard;
};

const ProfilePost: React.FC = () => {
    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Başlıklar-Konular</IonCardSubtitle>
                    <IonCardTitle>Başlık</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonItem>
                            <IonIcon src={heartOutline}></IonIcon>
                            <IonLabel>123s</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon src={chatbubbleOutline}></IonIcon>
                            <IonLabel>156</IonLabel>
                        </IonItem>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </>
    );
}

export default ProfilePost;