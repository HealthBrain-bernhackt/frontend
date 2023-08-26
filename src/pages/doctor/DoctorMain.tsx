import React from 'react'
import { useState } from 'react';
import QrReader from 'react-qr-reader';


export default function DoctorMain() {
    const [data, setData] = useState('No result');
    const [showCamera, setShowCamera] = useState(false);
    const constraints = {
        facingMode: 'environment', // Use the rear-facing camera
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
                            onScan={(result: any) => {
                                if (!!result) {
                                    setData((result as any)?.text);
                                }


                            }}
                            className='max-w-xl aspect-square' // You can add a className here
                            onError={(err: any) => console.log(err)}
                        />
                        <p>{data}</p>
                    </div>
                )
            }


        </div>
    )
}