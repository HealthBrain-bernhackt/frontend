import React, { useState } from 'react';
import Container from '../components/Container';
import { IonPage, IonContent } from '@ionic/react';
import HeadNav from '../components/HeadNav';
import sendIcon from '../assets/sendIcon.svg';

export default function ChatAI() {
    const [message, setMessage] = useState<string>(''); // Added type annotation string

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { // Added type annotation React.ChangeEvent<HTMLTextAreaElement>
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Added type annotation React.FormEvent<HTMLFormElement>
        e.preventDefault();
        // Handle form submission here, e.g., send the message to a chat system.
        setUserMessages([...userMessages, message]);
        setMessage('');
    };
    const [userMessages, setUserMessages] = useState<string[]>([]); // Added type annotation string[]

    return (
        <IonPage>
            <HeadNav back={true} />
            <IonContent>
                <div className="chat chat-start mt-5 w-8/12">
                    <div className="chat-bubble chat-bubble-primary">
                        Hi, I am MediSearch AI, here to help you with medical advice, track your health, and answer your health questions.
                    </div>
                </div>
                <div>
                    {userMessages.map((message, index) => (
                        <div className="chat chat-end" key={index}>
                            <div className="chat-bubble">{message}</div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="bottom-0 fixed w-full pb-5 pt-2 bg-gray-50">
                    <div className="flex items-center px-3 py-2 rounded-lg dark:bg-gray-700">
                        <textarea
                            id="chat"
                            rows={1}
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                            value={message}
                            onChange={handleInputChange}
                        ></textarea>
                        <button
                            type="submit"
                            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                        >
                            <img src={sendIcon} alt="send icon" className="w-5 h-5" />
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
}

