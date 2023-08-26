import React, { useEffect } from 'react'
import { useState } from 'react';
import QrReader from 'react-qr-reader';


export default function DoctorMain() {
    const [result, setResult] = useState('No result');
    const [showCamera, setShowCamera] = useState(false);
    const constraints = {
        facingMode: 'portrait', // Use the rear-facing camera
        frameRate: { ideal: 30, max: 60 }
    };

    useEffect(() => {
        console.log("send a request and navigate to the  page");
        console.log(result)
    }, [result])

    return (
        <div>



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
                        <p>{result}</p>
                    </div>
                )
            }


        </div>
    )
}