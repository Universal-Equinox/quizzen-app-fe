import React, { useState } from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonCard, IonGrid, IonRow, IonCol, IonAvatar, IonImg, IonText, IonCardContent, IonIcon, IonLabel, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { Answer } from '../types/post';
import { heart, send } from 'ionicons/icons';


interface AnswerCardProps {
    answer: Answer;
    isOpen: boolean;
    onClose: () => void;
}


const AnswerModal: React.FC<AnswerCardProps> = ({ answer, isOpen, onClose }) => {

    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Question Name</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onClose}>Kapat</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>

                    <IonRow>
                        <IonCol size="2" >
                            <IonAvatar>
                                <IonImg src={answer.user.profileImg}></IonImg>
                            </IonAvatar>
                        </IonCol>
                        <IonCol style={{ display: 'flex', alignItems: 'center' }}>
                            <IonText>
                                {answer.user.userName}
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow style={{ justifyContent: 'flex-end' }}>
                        <IonText>
                            {new Date(answer.createdDate).toLocaleTimeString()}
                        </IonText>
                    </IonRow>

                </IonGrid>
                <IonCard  >
                    <IonCardSubtitle>{answer.text}</IonCardSubtitle>
                    <IonCardContent>
                        {answer.images &&
                            answer.images.map((img) => (
                                <IonCol key={img.url}>
                                    <IonImg src={img.url}></IonImg>
                                </IonCol>
                            ))}
                    </IonCardContent>
                    <IonButton fill="clear" color="danger">
                        <IonIcon icon={heart} />
                        <IonLabel>2</IonLabel>
                    </IonButton>

                    <IonButton fill="clear">
                        <IonIcon icon={send} />
                        <IonLabel>2</IonLabel>
                    </IonButton>
                </IonCard>


            </IonContent>
        </IonModal>
    )
}

export default AnswerModal;