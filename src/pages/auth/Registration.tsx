import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import HeadNav from '../../components/HeadNav'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function Registration() {
    return (
        <IonPage>
        <HeadNav back={false} />
        <IonContent>
            <Container>
                <h1 className="font-bold">Questions?</h1>
                <Button></Button>
            </Container>
        </IonContent>
    </IonPage>
    )
}
