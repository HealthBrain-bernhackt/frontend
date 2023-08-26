import React from 'react'
import { IonButton, IonContent, IonPage, IonTitle } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import { PieChart } from 'react-minimal-pie-chart';

export default function Home() {
    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <div className='px-8 py-8'>
                    <h1>Hi, Max Mustermann</h1>
                    <div className="flex justify-center items-center mt-12">
                        <PieChart className="w-6/12"
                            data={[
                                { title: 'One', value: 60, color: '#17A6C6' },
                                { title: 'Two', value: 20, color: '#f5f6f7' },
                            ]}
                            lineWidth={40}
                        />
                    </div>
                    <p className="mt-5 text-sm">You have already taken 80% of your medication</p>
                    <h5 className="mt-5 font-bold">Todays medication</h5>
                    <div></div>
                </div>
            </IonContent>
        </IonPage>

    )
}
