import React, { useEffect, useState } from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import QRCode from "react-qr-code";
import Container from '../components/Container';
import medicalConditions from '../assets/medicalConditions.svg'
import medicalHistory from '../assets/medicalHistory.svg'
import parseJwt from '../utils/jwt';
import { useHistory } from 'react-router';
import doc from '../assets/doc.svg'




export default function Profile() {
    const [userId, setUserId] = useState<string>(localStorage.getItem("access_token") ? parseJwt(localStorage.getItem("access_token")!).user_id : "0")
    const history = useHistory()

    useEffect(() => {   
        if (localStorage.getItem("access_token")){      
            let token: string | null = localStorage.getItem("access_token")
            setUserId(parseJwt(token!).user_id)
        }
    }, [])
 

    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <Container>
                    <h1 className="font-bold">Max Mustermann</h1>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className="mt-5">Have your doctor scan the qr code for more information</p>
                            <img src={doc} alt="doctor icon" className="w-full rounded-full mt-5" />
                        </div>
                        <div className='flex justify-center mt-10 mx-5'>
                            <div className="w-64">
                                <QRCode
                                    size={128}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value={userId! ? userId.toString() : "0"}
                                    viewBox={`0 0 256 256`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-16'>
                        <button className="w-full bg-[#8BD3E2] py-4 my-2 rounded-lg flex items-center justify-center">
                            <img src={medicalHistory} onClick={() => {}} alt="doctor icon" className="w-5 h-5 mr-3" />
                            Medical history
                        </button>
                        <button className="w-full bg-[#51BDD4] py-4 my-2 rounded-lg flex items-center justify-center">
                            <img src={medicalConditions} onClick={() => {}} alt="doctor icon" className="w-5 h-5 mr-3" />
                            Medical condition
                        </button>
                    </div>
                </Container>
            </IonContent>
        </IonPage>
    )
}
