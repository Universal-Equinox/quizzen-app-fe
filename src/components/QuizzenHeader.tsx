import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";


const Header: React.FC = () => {
    return (
        <>
            <IonHeader collapse="fade" className="ion-text-center">
                <IonToolbar>
                    <IonTitle>
                        <h2>Quizzen</h2>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
        </>
    );
};

export default Header;