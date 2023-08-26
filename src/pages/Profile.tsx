import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import QRCode from "react-qr-code";
import Container from '../components/Container';
import medicalConditions from '../assets/medicalConditions.svg'
import medicalHistory from '../assets/medicalHistory.svg'




export default function Profile() {
    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <Container>
                    <h1 className="font-bold">Max Mustermann</h1>
                    <div className='flex justify-center mt-10'>
                        <div className="w-64">
                            <QRCode
                                size={128}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    </div>
                    <p className="mt-5">Have your doctor scan the qr code for more information</p>
                    <div className='mt-5'>
                        <button className="w-full bg-[#8BD3E2] py-4 my-2 rounded-lg flex items-center justify-center">
                            <img src={medicalHistory} alt="doctor icon" className="w-5 h-5 mr-3" />
                            Medical history
                        </button>
                        <button className="w-full bg-[#51BDD4] py-4 my-2 rounded-lg flex items-center justify-center">
                            <img src={medicalConditions} alt="doctor icon" className="w-5 h-5 mr-3" />
                            Medical condition
                        </button>
                    </div>
                </Container>
            </IonContent>
        </IonPage>
    )
}
