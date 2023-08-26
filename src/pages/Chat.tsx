import React from 'react'
import { IonPage, IonTitle } from '@ionic/react'
import HeadNav from '../components/HeadNav'


export default function Chat() {
    return (
        <IonPage>
            <HeadNav back={false} />
            <IonTitle>Chat</IonTitle>
        </IonPage>
    )
}
