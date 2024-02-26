import {
    IonContent,
    IonHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonItem,
    IonList,
    IonNavLink,
    IonPage,
    IonSelect,
    IonSelectOption,
    SelectChangeEventDetail,
    IonSpinner,
    IonButton,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import PostDetail from "./PostDetail";
import QuizzenHeader from "../components/QuizzenHeader";

const AddQuestion: React.FC = () => {
    const [loading, setLoading] = useState(false);
    enum LectureType {
        None,
        Math,
        Physics,
        Science,
        History,
    }
    let selectLectureType = LectureType.None;

    const currentDate = new Date(Date.now());
    const formattedDate = `${currentDate.toLocaleDateString("tr-TR", {
        dateStyle: "medium",
    })} ${currentDate.toLocaleTimeString("tr-TR", { timeStyle: "short" })}`;

    return (
        <IonPage>
            <QuizzenHeader />
            <IonContent>
                <IonList>

                    <IonItem>
                        <IonInput label="Başlık" labelPlacement="floating" placeholder="Enter title"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Açıklama" labelPlacement="floating" placeholder="Enter subtitle"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput label="Resim" labelPlacement="floating" placeholder="Enter img lo"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonSelect label="Ders Seç" placeholder="Dersler">
                            <IonSelectOption value={LectureType.Math}>Matematik
                            </IonSelectOption>
                            <IonSelectOption value={LectureType.Physics}>Fizik
                            </IonSelectOption>
                            <IonSelectOption value={LectureType.Science}>Fen
                            </IonSelectOption>
                            <IonSelectOption value={LectureType.History}>Tarih
                            </IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonItem>
                        <IonSelect label="Konu Seç" placeholder="Konular">
                            <IonSelectOption value="">Denklemler
                            </IonSelectOption>
                            <IonSelectOption value="">Polinomlar
                            </IonSelectOption>
                            <IonSelectOption value="">Eşitsizlikler
                            </IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonButton  expand="full" color="primary">Soru Ekle</IonButton>

                </IonList>
            </IonContent>
        </IonPage>
    );
};
export default AddQuestion;
