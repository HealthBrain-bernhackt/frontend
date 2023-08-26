import React from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom';
import Container from '../../components/Container';
import { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom'

// Define a type for the route parameters
interface RouteParams {
    userId: string;
}


export default function PrescribeMedicine() {
    // Use the useParams hook to access the route parameter
    const { userId } = useParams<RouteParams>();
    const history = useHistory();

    const [medTimes, setMedTimes] = useState<string[]>([]);
    const [newMedTime, setNewMedTime] = useState<string>('');
    const handleAddMedTime = () => {
        if (newMedTime.trim() !== '') {
            setMedTimes([...medTimes, newMedTime]);
            setNewMedTime('');
        }
    };
    console.log(userId);

    return (
        <IonPage>
            <IonContent>
                <Container>
                    <h1 className="font-bold">General Information</h1>

                    <div className="form-control w-full mr-1">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full ml-1">
                        <label className="label">
                            <span className="label-text">Dose</span>

                        </label>
                        <input type="text" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-1">
                        <label className="label">
                            <span className="label-text">Daily Dosage</span>

                        </label>
                        <input type="number" className="input input-bordered w-full " />
                    </div>
                    <h5 className="font-bold">Medication Times (hh:mm)</h5>
                    <ul className="mt-4">
                        {medTimes.map((med, index) => (
                            <li key={index} className='py-2 border-gray-300 border border-solid my-2 px-4 rounded-lg'>{med}</li>
                        ))}
                    </ul>
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Enter time"
                        value={newMedTime}
                        onChange={(e) => setNewMedTime(e.target.value)}
                        className="input input-bordered w-full"
                    />

                    {/* Add Button */}
                    <button
                        className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-4 font-bold w-full'
                        onClick={handleAddMedTime}
                    >
                        Add
                    </button>
                    <div className="form-control w-full ml-1">
                        <label className="label">
                            <span className="label-text">Duration</span>

                        </label>
                        <input type="text" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-1">
                        <label className="label">
                            <span className="label-text">Notes</span>

                        </label>
                        <textarea className="textarea textarea-bordered w-full " rows={4} />
                    </div>
                    <button
                        className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-4 font-bold w-full'
                        onClick={() => history.push("/doc/home")}
                    >
                        Prescribe Medicine
                    </button>
                </Container>
            </IonContent>
        </IonPage>
    );
}