import { IonContent, IonPage } from '@ionic/react'



export default function GeneralInfo() {
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
                                <input type="text" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full ml-1">
                                <label className="label">
                                    <span className="label-text">Last name</span>

                                </label>
                                <input type="text" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Height (in cm)</span>

                            </label>
                            <input type="number" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Weight (in kg)</span>

                            </label>
                            <input type="number" className="input input-bordered w-full " />
                        </div>
                        <button className='rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold w-full'>Continue</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
