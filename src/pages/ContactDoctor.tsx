import { useState } from 'react'
import Container from '../components/Container'
import { IonPage, IonContent } from '@ionic/react'
import HeadNav from '../components/HeadNav'
import sendIcon from '../assets/sendIcon.svg'

export default function ContactDoctor() {
    return (
        <IonPage>
            <HeadNav back={true} />
            <IonContent>
                <Container>
                    <h1 className="font-bold">Contact a Doctor</h1>
                    <select name="doctors" id="doctors" className="border border-solid border-gray-300 rounded-md py-3 px-4 w-full mt-7 bg-gray-50 text-gray-900"  >
                        <option value="dr.reuben@abati.tv">Dr. Reuben Abati</option>
                        <option value="abt@franz.ch">Dr. Med. Franz Abt</option>
                    </select>
                    <div className='mt-7'>
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-900 dark:text-white font-bold">Your message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-10/12 rounded-lg py-4 px-1 flex items-center justify-center bg-[#8BD3E2] fixed bottom-10 hover:bg-[#5EA0AE] transition-all"
                        >
                            <img src={sendIcon} alt="send icon" className="w-5 h-5 mr-3" />
                            Send
                        </button>
                    </div>
                </Container>
            </IonContent>
        </IonPage >
    )
}
