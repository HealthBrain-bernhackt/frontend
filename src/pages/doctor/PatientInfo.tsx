import React from 'react';
import { useParams, RouteComponentProps } from 'react-router-dom';
import Container from '../../components/Container';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { IonPage } from '@ionic/react';

// Define a type for the route parameters
interface RouteParams {
    userId: string;
}


export default function PatientInfo() {

    const history = useHistory();
    // Use the useParams hook to access the route parameter
    const { userId } = useParams<RouteParams>();
    const [data, setData] = useState<any>({ name: "Max Mustermann", age: 27, gender: "male", height: 250, weight: 400, diagnoses: ["Hayfever", "broken leg"] });

    console.log(userId);

    return (
        <IonPage>
            <Container>
                <h1>Patient info</h1>
                <p>User ID: {userId}</p>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                <p>Gender: {data.gender}</p>
                <p>Height: {data.height}cm</p>
                <p>Weight: {data.weight}kg</p>
                <p>Diagnoses:</p>
                <ul className='px-6'>
                    {data.diagnoses.map((diagnosis: string, index: any) => {
                        return <li key={index} className='list-disc'>{diagnosis}</li>
                    }
                    )}
                </ul>
                <button className="w-full bg-[#51BDD4] py-4 my-2 rounded-lg flex items-center justify-center mt-10" onClick={() => {
                    history.push(`/doc/prescribeMed/${userId}`);
                }}>
                    Prescribe Medicine
                </button>
            </Container>
        </IonPage>
    );
}

