import React from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import Container from '../../components/Container'
import account_circle from '../../assets/account_circle.svg'
import googleIcon from '../../assets/googleIcon.svg'
import { useHistory } from 'react-router-dom'

export default function AuthType() {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Hey there, nice to meet you 👋</h1>
                        <button className='w-full rounded-lg bg-[#F6F6F6] py-5 flex items-center justify-center my-4'><img src={googleIcon} className='w-5 h-5 mr-4' />Continue with Google</button>
                        <div className="divider">OR</div>
                        <button className='w-full rounded-lg bg-[#8BD3E2] py-5 flex items-center justify-center my-4' onClick={(e) => {
                            e.preventDefault();
                            history.push('/login');
                        }}><img src={account_circle} className='w-5 h-5 mr-4' />Login with Email</button>
                        <button className='flex justify-center w-full my-4 py-5 bg-white' onClick={(e) => {
                            e.preventDefault();
                            history.push('/register');
                        }}>Register</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
