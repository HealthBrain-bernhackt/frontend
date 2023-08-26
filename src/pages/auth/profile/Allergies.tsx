import React, { useState } from 'react';
import { IonPage, IonTitle, IonContent } from '@ionic/react';
import { useHistory } from 'react-router';

export default function Allergies() {
    const history = useHistory();
    const [allergies, setAllergies] = useState<string[]>([]);
    const [newAllergy, setNewAllergy] = useState<string>('');

    const handleAddAllergy = () => {
        if (newAllergy.trim() !== '') {
            setAllergies([...allergies, newAllergy]);
            setNewAllergy('');
        }
    };

    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8  h-screen flex items-center justify-center'>
                    <div className='w-full max-w-xs'>
                        <h1 className="font-bold">Add allergies</h1>
                        {/* List of Allergies */}
                        <ul className="mt-4">
                            {allergies.map((condition, index) => (
                                <li key={index} className='py-2 border-gray-300 border border-solid my-2 px-4 rounded-lg w-full'>{condition}</li>
                            ))}
                        </ul>
                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Enter an allergy"
                            value={newAllergy}
                            onChange={(e) => setNewAllergy(e.target.value)}
                            className="input input-bordered input-primary w-full"
                        />

                        {/* Add Button */}
                        <button
                            className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-4 font-bold w-full'
                            onClick={handleAddAllergy}
                        >
                            Add
                        </button>

                        {/* Continue Button */}
                        <button
                            className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-4 font-bold w-full'
                            onClick={() => history.push("/allergies")}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}