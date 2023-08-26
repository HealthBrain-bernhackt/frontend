import React, { useState } from 'react';
import { IonPage, IonContent, IonDatetime } from '@ionic/react';
import { useHistory } from 'react-router-dom';

export default function Birthday() {
    const [birthday, setBirthday] = useState('');
    const history = useHistory();

    // Event handler to update birthday state
    const handleDateChange = (event: any) => {
        setBirthday(event.detail.value);
    };

    const handleNext = () => {
        localStorage.setItem("birthday", birthday)
        history.push("/generalInfo")
    }
    console.log(birthday);
    //example of what birthday could be: 2021-12-06T20:15:00

    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">What is your birthday?</h1>
                        <IonDatetime
                            display-format="YYYY-MM-DD"
                            presentation="date"
                            value={birthday}
                            onIonChange={handleDateChange}
                        ></IonDatetime>

                        <button
                            className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold w-full'
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
