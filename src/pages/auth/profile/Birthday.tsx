import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import Container from '../../../components/Container'
import Button from '../../../components/Button'

export default function Birthday() {
    return (
        <IonPage>
        <IonContent>
            <Container>
            <h1 className="font-bold">Questions?</h1>
                <Button>Continue with Google</Button>
                <Button>Login with Email</Button>
                <Button>Register</Button>
            </Container>
        </IonContent>
    </IonPage>
    )
}