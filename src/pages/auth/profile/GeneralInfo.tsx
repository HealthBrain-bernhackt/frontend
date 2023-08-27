import { IonContent, IonPage } from '@ionic/react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function GeneralInfo() {
    const history = useHistory()

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const handleFirstname = (e: any) => {
        setFirstname(e.target.value)
    }

    const handleLastname = (e: any) => {
        setLastname(e.target.value)
    }

    const handleHeight = (e: any) => {
        setHeight(e.target.value)
    }

    const handleWeight = (e: any) => {
        setWeight(e.target.value)
    }

    const handleNext =() => {
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("height", height);
        localStorage.setItem("weight", weight);
        history.push("/preconditions")
    }


    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">General Information</h1>
                        <div className='flex items-center'>
                            <div className="form-control w-full mr-1">
                                <label className="label">
                                    <span className="label-text">First name</span>

                                </label>
                                <input onChange={handleFirstname} type="text" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full ml-1">
                                <label className="label">
                                    <span className="label-text">Last name</span>

                                </label>
                                <input onChange={handleLastname} type="text" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Height (in cm)</span>

                            </label>
                            <input onChange={handleHeight} type="number" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Weight (in kg)</span>

                            </label>
                            <input onChange={handleWeight} type="number" className="input input-bordered w-full " />
                        </div>
                        <button onClick={handleNext} className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold w-full'>Continue</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
