import React, { useEffect } from 'react';
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

    useEffect(() => {
        let user_info: any = localStorage.getItem("user_info")
        setData(JSON.parse(user_info!).profile)
        console.log(data)
        if (data.allergies) {
            const allergiesString = data.allergies;
            // Remove square brackets and single quotes
            const cleanedString = allergiesString.replace(/[\[\]']/g, '');

            // Split the string by commas to create an array
            const allergiesArray: string[] = cleanedString.split(',').map((item: any) => item.trim());
            data.allergies = allergiesArray
            console.log(data.all)
        }

        if (data.preconditions) {
            const preconditionsString = data.preconditions;

            // Remove square brackets and single quotes
            const cleanedString2 = preconditionsString.replace(/[\[\]']/g, '');

            // Split the string by commas to create an array
            const preconditionsArray: string[] = cleanedString2.split(',').map((item: any) => item.trim());
            data.preconditions = preconditionsArray
        }

    }, [])

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
                <p>Allergies:</p>
                <ul className='px-6'>
{data.allergies}
                  
                </ul>
                <p>Preconditions:</p>
                <ul className='px-6'>
                    {data.preconditions}
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

