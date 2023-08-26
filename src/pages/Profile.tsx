import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import QRCode from "react-qr-code";



export default function Profile() {
    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <div className='px-8 py-8'>
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
                        <button className="w-full bg-[#8BD3E2] py-4 my-2 rounded-lg">Your health information</button>
                        <button className="w-full bg-[#51BDD4] py-4 my-2 rounded-lg">Your prescriptions</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
