import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'

export default function Role() {
    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Let’s get to know each other</h1>
                        <h3 className='text-sm'>I am a ...</h3>
                        <button className='w-full rounded-lg bg-[#F6F6F6] py-4 flex items-center justify-center my-5 font-bold'>patient</button>
                        <button className='w-full rounded-lg bg-[#F6F6F6] py-4 flex items-center justify-center my-5 font-bold'>medical professional </button>
                        <button className='w-full rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold'>Continue</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}