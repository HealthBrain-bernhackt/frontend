import React from 'react'
import { IonPage, IonTitle, IonContent, IonIcon } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import chatBubbleIllustration from '../assets/chatBubbleIllustration.svg'
import { useHistory } from 'react-router-dom'

export default function Chat() {
    const history = useHistory();
    return (
        <IonPage>
            <HeadNav back={false} />
            <IonContent>
                <div className='px-8 py-8'>
                    <h1 className="font-bold">Questions?</h1>
                    <div className="w-full flex justify-center mt-16">
                        <img src={chatBubbleIllustration} alt="chat bubble illustration" className="w-6/12 max-w-48" />
                    </div>
                    <div className='mt-16'>
                        <button className="w-full bg-[#8BD3E2] py-4 my-2 rounded-lg" onClick={(e) => {
                            e.preventDefault();
                            history.push('/app/chatAI/');
                        }}>Ask HealthBrain AI</button>
                        <button className="w-full bg-[#51BDD4] py-4 my-2 rounded-lg" onClick={(e) => {
                            e.preventDefault();
                            history.push('/app/contactDoctor/');
                        }}>Contact a Doctor</button>
                    </div>

                </div>
            </IonContent>
        </IonPage>
    )
}