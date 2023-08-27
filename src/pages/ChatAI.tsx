import React, { useEffect, useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import HeadNav from '../components/HeadNav';
import sendIcon from '../assets/sendIcon.svg';
import user from '../services/user.service';

// Define a type for your state object
type MessageType = {
    message: string;
    type: string;
};

const ChatAI: React.FC = () => {

    const [inputMessage, setInputMessage] = useState<string>(''); // Store the current input message as a string

    const [allMessages, setAllMessages] = useState<MessageType[]>([
        { message: "Hi, I am MediSearch AI, here to help you with medical advice, track your health, and answer your health questions.", type: 'ai' }
    ]); // Store all messages as MessageType[]

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputMessage(e.target.value); // Update the input message
    };

    useEffect(() => {
        console.log(allMessages)
    }, [allMessages])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Add the new message to allMessages as a MessageType object
        setAllMessages([...allMessages, { message: inputMessage, type: 'human' }]);

        // Clear the input after submitting
        setInputMessage('');

        user.message({message : inputMessage})
        .then((response) => {
            setAllMessages(prevMessages => [...prevMessages,{ message: response.answer, type: 'ai' }]);
        })
        .catch((error) => {
            console.log(error)
        })

        
    };

    return (
        <IonPage>
            <HeadNav back={true} />
            <IonContent>
                <div className='mt-5 pb-24'>
                    {allMessages.map((message, index) => (
                        <div className={`chat ${message.type == "ai" ? "chat-start" : "chat-end"}`} key={index}>
                            <div className={`chat-bubble ${message.type == "ai" && "chat-bubble-primary"}`}>{message.message}</div>
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
                            value={inputMessage}
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

export default ChatAI;
