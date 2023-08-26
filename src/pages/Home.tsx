import { useState } from 'react'
import { IonButton, IonContent, IonPage, IonTitle } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import { PieChart } from 'react-minimal-pie-chart';
import calendar from '../assets/calendar.png'
import { MedicationToday } from '../types/MedicationToday';


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // Note that months are zero-based (0 = January)
const year = date.getFullYear();
const hour = date.getHours();

const returnNearestMedicationTime = (medication: any) => {


    const times = medication.times;
    const currentTime = new Date();
    let nearestTime: string | null = null;
    let smallestDifference: number | null = null;
    let nearestIndex: number = -1;

    times.forEach((timeObject: any, index: number) => {
        if (timeObject.taken === true) {
            return; // Skip this time and continue with the next iteration
        }

        const medicationTime = new Date(timeObject.time);
        const timeDifference = Math.abs(currentTime.getTime() - medicationTime.getTime());

        if (smallestDifference === null || timeDifference < smallestDifference) {
            smallestDifference = timeDifference;
            nearestTime = timeObject.time;
            nearestIndex = index;
        }
    });

    if (nearestTime === null) {
        return { timeString: null, index: -1 };
    }

    return { timeString: nearestTime, index: nearestIndex };
};






const returnLatestTaken = (medication: any) => {
    for (let i = medication.times.length - 1; i >= 0; i--) {
        if (medication.times[i].taken) {
            return medication.times[i].time;
        }
    }
}





export default function Home() {
    const [data, setData] = useState(
        new Array<MedicationToday>(
            {
                name: 'Medication A', value: 10, dosage: '80mg', times: [{ time: '8:00', taken: true }, { time: '12:30', taken: true }, { time: '16:00', taken: false }, { time: '20:00', taken: false }]
            },
            {
                name: 'Medication B', value: 10, dosage: '200mg', times: [{ time: '8:00', taken: false }, { time: '20:00', taken: false }]
            },
        )
    );

    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <div className='px-8 py-8'>
                    <h1 className="font-bold">Hi, Max Mustermann</h1>
                    <div className="flex justify-center items-center mt-12">
                        <PieChart className="w-6/12"
                            data={[
                                { title: 'Taken', value: 2, color: '#17A6C6' },
                                { title: 'Not taken', value: 2, color: '#f5f6f7' },
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
                                    {nearestTime.timeString != null &&
                                        <div className="mt-5">
                                            <p className="font-bold text-lg">{nearestTime.timeString}</p>
                                            <div className="grid-cols-2 grid rounded-md bg-gray-100 px-5 py-6">
                                                <div>
                                                    <p className="font-bold text-lg">{medication.name}</p>
                                                    <p className="">{medication.dosage}</p>
                                                </div>
                                                <div className="flex justify-end items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="w-6 h-6 border-2 border-gray-400 rounded-full transition-all checked:bg-blue-500 checked:border-blue-500"
                                                        onChange={() => {

                                                            // Check if nearestTime is not null
                                                            if (nearestTime !== null) {

                                                                console.log(index)
                                                                console.log(data[index])
                                                                // Update the 'taken' property if the index is valid
                                                                if (index !== -1 && data[index].times) {
                                                                    const updatedData = [...data]; // Create a copy of the data array
                                                                    updatedData[index].times[nearestTime.index].taken = true;
                                                                    setData(updatedData); // Update the state with the new data
                                                                }
                                                            }
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            );
                        })}



                    </div>
                    <h5 className="mt-5 font-bold">Already taken</h5>
                    <div>
                        {data.map((medication, index) => {
                            const latestTaken = returnLatestTaken(medication);
                            return (
                                <div key={index}>
                                    <div className="mt-5">
                                        <p className="font-bold text-lg">
                                            {latestTaken === null ? 'Not Taken' : `${latestTaken}`}
                                        </p>
                                        <div className="grid-cols-2 grid rounded-md bg-[#B9E4EE] px-5 py-6">
                                            <div>
                                                <p className="font-bold text-lg">{medication.name}</p>
                                                <p className="">{medication.dosage}</p>
                                            </div>
                                            <div className="flex justify-end items-center">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                    className="w-6 h-6 border-2 border-gray-400 rounded-full transition-all checked:bg-blue-500 checked:border-blue-500 cursor-not-allowed opacity-50"
                                                    disabled
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
