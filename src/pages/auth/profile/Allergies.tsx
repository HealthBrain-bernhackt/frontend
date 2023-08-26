import React, { useState } from 'react';
import { IonPage, IonTitle, IonContent } from '@ionic/react';
import { useHistory } from 'react-router';
import { IUserInfo } from '../../../types/User';
import user from '../../../services/user.service';
export default function Allergies() {
    const history = useHistory();
    const [allergies, setAllergies] = useState<string[]>([]);
    const [newAllergie, setNewAllergie] = useState<string>('');

    const handleAddCondition = () => {
        if (newAllergie.trim() !== '') {
            setAllergies([...allergies, newAllergie]);
            setNewAllergie('');
        }
    };

    const handleSubmit = () => {
        localStorage.setItem("allergies", JSON.stringify(allergies))
        let dataUserInfo: IUserInfo = {
            // age: parseInt(localStorage.getItem('age') || '0', 10),
            //TODO: calculate age from the current date - getItem('age')
            age: 25,
            gender: localStorage.getItem('gender') || '',
            height: parseInt(localStorage.getItem('height') || '0', 10),
            weight: parseInt(localStorage.getItem('weight') || '0', 10),
            name: localStorage.getItem('firstname') || ''  + localStorage.getItem('lastname') || '',
            preconditions: localStorage.getItem('preconditions') || '',
            allergies: localStorage.getItem('allergies') || '',
        }
        console.log(dataUserInfo)
        user.postInfo(dataUserInfo)
        .then((response : any) => {
            console.log(response)
            history.push("/app/home")
        })
        .catch((error : any) => {
            console.log(error)
        })
    }

    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Add Allergie</h1>
                        {/* List of Preconditions */}
                        <ul className="mt-4">
                            {allergies.map((allergie, index) => (
                                <li key={index}>{allergie}</li>
                            ))}
                        </ul>
                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Enter a precondition"
                            value={newAllergie}
                            onChange={(e) => setNewAllergie(e.target.value)}
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
                            onClick={handleSubmit}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
