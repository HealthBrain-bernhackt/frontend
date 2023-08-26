import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import Container from '../../components/Container'
import account_circle from '../../assets/account_circle.svg'
import googleIcon from '../../assets/googleIcon.svg'

export default function Login() {
    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Log in to your account :)</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">E-Mail</span>

                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button className='w-full rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-20 font-bold'>Login</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}