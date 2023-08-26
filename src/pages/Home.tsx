import { useEffect, useState } from 'react'
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

function calculateMedicationTakenPercentage(medications: MedicationToday[]): number {
    let totalMedications = 0;
    let medicationsTaken = 0;

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    medications.forEach((medication) => {
        medication.times.forEach((timeObject) => {
            const [hour, minute] = timeObject.time.split(':').map(Number);

            if (hour < currentHour || (hour === currentHour && minute <= currentMinute)) {
                totalMedications++;

                if (timeObject.taken) {
                    medicationsTaken++;
                }
            }
        });
    });

    if (totalMedications === 0) {
        return 0; // Avoid division by zero
    }

    const percentageTaken = (medicationsTaken / totalMedications) * 100;
    return Math.round(percentageTaken);
}






export default function Home() {

    const [data, setData] = useState(
        new Array<MedicationToday>(
            {
                name: 'Medication A', value: 10, dosage: '80mg', times: [{ time: '8:00', taken: false }, { time: '12:30', taken: false }, { time: '16:00', taken: false }, { time: '20:00', taken: false }]
            },
            {
                name: 'Medication B', value: 10, dosage: '200mg', times: [{ time: '8:00', taken: false }, { time: '20:00', taken: false }]
            },
        )
    );

    const [percentageTaken, setPercentageTaken] = useState(0);

    useEffect(() => {
        const percent = calculateMedicationTakenPercentage(data);
        console.log(percent);
        setPercentageTaken(percent);
    }, [data]);

    return (
        <IonPage>
            <HeadNav back={false} />
            <Toaster />
            <IonContent>
                <Container>
                    <h1 className="font-bold">Hi, Max Mustermann</h1>
                    <div className="flex justify-center items-center mt-12 relative">
                        <div>
                            <div className="relative">
                                <PieChart
                                    className="w-40 flex justify-center items-center -rotate-90"
                                    data={[
                                        { title: 'Taken', value: percentageTaken, color: '#17A6C6' },
                                        { title: 'Not taken', value: 100 - percentageTaken, color: '#f5f6f7' },
                                    ]}
                                    lineWidth={40}
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <h1 className="text-center font-bold text-xl ml-2">{percentageTaken}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 text-sm">You have already taken {percentageTaken}% of your medication that is due</p>
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
                                                        onChange={(event) => {

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

                                                            // Uncheck the checkbox
                                                            setTimeout(() => event.target.checked = false, 200);
                                                            toast.success('Medication taken');
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
                                    {latestTaken && (
                                        <div className="mt-5">
                                            <p className="font-bold text-lg">
                                                {latestTaken === null ? 'Not Taken' : `${latestTaken}`}
                                            </p>
                                            <div className="grid grid-cols-2 rounded-md bg-[#B9E4EE] px-5 py-6">
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
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    </Container>
            </IonContent>
        </IonPage>

    )
}