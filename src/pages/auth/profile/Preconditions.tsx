import React, { useState } from 'react';
import { IonPage, IonTitle, IonContent } from '@ionic/react';
import { useHistory } from 'react-router';

export default function Preconditions() {
    const history = useHistory();
    const [preconditions, setPreconditions] = useState<string[]>([]);
    const [newCondition, setNewCondition] = useState<string>('');

    const handleAddCondition = () => {
        if (newCondition.trim() !== '') {
            setPreconditions([...preconditions, newCondition]);
            setNewCondition('');
        }
    };

    const handleNext =() => {
        localStorage.setItem("preconditions", JSON.stringify(preconditions));
        history.push("/allergies")
    }

    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Add medical preconditions</h1>
                        {/* List of Preconditions */}
                        <ul className="mt-4">
                            {preconditions.map((condition, index) => (
                                <li key={index}>{condition}</li>
                            ))}
                        </ul>
                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Enter a precondition"
                            value={newCondition}
                            onChange={(e) => setNewCondition(e.target.value)}
                            className="input input-bordered input-primary w-full"
                        />

                        {/* Add Button */}
                        <button
                            className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-4 font-bold w-full'
                            onClick={handleAddCondition}
                        >
                            Add
                        </button>

                        {/* Continue Button */}
                        <button
                            className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-4 font-bold w-full'
                            onClick={handleNext}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
