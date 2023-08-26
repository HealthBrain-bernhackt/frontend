import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import settingsIcon from "../assets/settingsIcon.svg"
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton, useIonRouter } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/react';

export default function HeadNav({ back }: { back: boolean }) {
    const ionRouter = useIonRouter();
    const history = useHistory();
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    {back && <IonBackButton defaultHref="home" ></IonBackButton>}
                </IonButtons>

                <IonTitle className="ion-text-center">
                    HealthBrain
                </IonTitle>
            </IonToolbar>
        </IonHeader >

    )
}