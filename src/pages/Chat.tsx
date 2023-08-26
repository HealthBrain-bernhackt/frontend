import React from 'react'
import { IonPage, IonTitle, IonContent, IonIcon } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import chatBubbleIllustration from '../assets/chatBubbleIllustration.svg'
import { useHistory } from 'react-router-dom'
import doctorIcon from '../assets/doctorIcon.svg'
import brainstorm from '../assets/brainstorm.png'

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
                        <button className="w-full bg-[#8BD3E2] py-4 my-2 rounded-lg flex items-center justify-center" onClick={(e) => {
                            e.preventDefault();
                            history.push('/app/chatAI/');
                        }}>
                            <img src={brainstorm} alt="doctor icon" className="w-5 h-5 mr-3" />
                            Ask HealthBrain
                        </button>
                        <button className="w-full bg-[#51BDD4] py-4 my-2 rounded-lg flex items-center justify-center" onClick={(e) => {
                            e.preventDefault();
                            history.push('/app/contactDoctor/');
                        }}>
                            <img src={doctorIcon} alt="doctor icon" className="w-5 h-5 mr-3" />
                            Contact a Doctor
                        </button>
                    </div>

                </div>
            </IonContent>
        </IonPage>
    )
}