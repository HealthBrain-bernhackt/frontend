import React from 'react'
import { useState } from 'react';
import QrReader from 'react-qr-reader';


export default function DoctorMain() {
    const [result, setResult] = useState('No result');
    const [showCamera, setShowCamera] = useState(false);
    const constraints = {
        facingMode: 'portrait', // Use the rear-facing camera
        frameRate: { ideal: 30, max: 60 }
    };
    return (
        <div>


            <div className='border-8 border-solid border-gray-400 aspect-square	h-64 flex items-center justify-center bg-gray-50'>
                <h1 className="font-bold my-0" onClick={() => setShowCamera(!showCamera)}>Scan QR Code</h1>
            </div>
            {
                showCamera && (
                    <div>
                        <QrReader
                            delay={300}
                            onError={(error) => {
                                console.log(error);
                            }}
                            onScan={(data) => {
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