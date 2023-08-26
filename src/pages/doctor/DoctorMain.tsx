import { IonPage } from '@ionic/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router';

export default function DoctorMain() {
    const history = useHistory();
    const [result, setResult] = useState('');
    const [showCamera, setShowCamera] = useState(false);
    const constraints = {
        facingMode: 'portrait', // Use the rear-facing camera
        frameRate: { ideal: 30, max: 60 }
    };

    useEffect(() => {
        console.log("send a request and navigate to the  page");
        console.log(result)
    }, [result])

    useEffect(() => {
        if (result.length > 0) {
            history.push(`/doc/patientInfo/${result}}`)
        }
    }, [result])

    return (
        <IonPage>



            {
                (
                    <div>
                        <QrReader
                            delay={500}
                            onError={(error: any) => {
                                console.log(error);
                            }}
                            onScan={(data: any) => {
                                if (data) {
                                    setResult(data);
                                }
                            }}
                            style={{ width: "100%" }}

                        />
                    </div>
                )
            }


        </IonPage>
    )
}