import { useState } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import { useHistory } from 'react-router-dom'

export default function Gender() {
    const history = useHistory()
    const [gender, setGender] = useState('female')

    const handleNext =() => {
        localStorage.setItem("gender", gender);
        history.push("/birthday")
    }

    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Let’s get to know each other</h1>
                        <h3 className='text-sm'>I am a ...</h3>
                        <div className=''>
                            <button className={`rounded-lg py-4 flex items-center justify-center my-3 font-bold w-full ${gender === "female" ? "bg-[#8BD3E2]" : "bg-[#F6F6F6]"}`} onClick={() => setGender("female")}>Female</button>
                            <button className={`rounded-lg py-4 flex items-center justify-center my-3 font-bold w-full ${gender === "male" ? "bg-[#8BD3E2]" : "bg-[#F6F6F6]"}`} onClick={() => setGender("male")}>Male</button>
                            <button className={`rounded-lg  py-4 flex items-center justify-center my-3 font-bold w-full ${gender === "other" ? "bg-[#8BD3E2]" : "bg-[#F6F6F6]"}`} onClick={() => setGender("other")}>Other</button>

                            <button onClick={handleNext} className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold w-full'>Continue</button>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
