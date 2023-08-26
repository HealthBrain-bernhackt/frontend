import React from 'react'
import { IonButton, IonContent, IonPage, IonTitle } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import { PieChart } from 'react-minimal-pie-chart';
import calendar from '../assets/calendar.png'

const data = [
    {
        name: 'Medication A', value: 10, dosage: '80mg', times: [{ time: '8:00', taken: true }, { time: '12:00', taken: false }, { time: '16:00', taken: false }, { time: '16:00', taken: false }]
    },
    {
        name: 'Medication B', value: 10, dosage: '200mg', times: [{ time: '8:00', taken: true }, { time: '20:00', taken: false }]
    },

]


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // Note that months are zero-based (0 = January)
const year = date.getFullYear();
const hour = date.getHours();

const returnNearestMedicationTime = (medication: any) => {
    const times = medication.times;
    const currentTime = new Date().getHours(); // Get the current hour
    let nearestTime = times[0];

    times.forEach((time: any) => {
        const timeValue = parseInt(time.time, 10);

        if (timeValue > currentTime) {
            if (timeValue < nearestTime && time.taken === false) {
                nearestTime = timeValue;
            }
        }
    });

    return nearestTime;
};


export default function Home() {
    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <div className='px-8 py-8'>
                    <h1 className="font-bold">Hi, Max Mustermann</h1>
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
                    <div className="flex items-center">
                        <img src={calendar} alt='calendar icon' className='w-5' />
                        <p className='ml-4'>{day}.{month}.{year}</p>
                    </div>
                    <div>
                        {data.map((medication, index) => {
                            const nearestTime = returnNearestMedicationTime(medication);
                            return (
                                <div key={index}>
                                    <div className="mt-5">
                                        <p className="font-bold text-lg">{nearestTime.time}</p>
                                        <div className="grid-cols-2 grid rounded-md bg-gray-100 px-5 py-6">
                                            <div>
                                                <p className="font-bold text-lg">{medication.name}</p>
                                                <p className="">{medication.dosage}</p>
                                            </div>
                                            <div className="flex justify-end items-center">
                                                <input
                                                    type="checkbox"
                                                    className="w-6 h-6 border-2 border-gray-400 rounded-full transition-all checked:bg-blue-500 checked:border-blue-500"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </IonContent>
        </IonPage>

    )
}
