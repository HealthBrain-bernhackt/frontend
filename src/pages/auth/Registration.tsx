import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function Registration() {
    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Create an  account to continue :)</h1>
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
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">E-Mail</span>

                            </label>
                            <input type="text" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" className="input input-bordered w-full " />
                        </div>
                        <button className='w-full rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold'>Create account</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
