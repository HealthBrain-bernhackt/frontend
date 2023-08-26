import React, { useState } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import { ILogin, IRegister } from '../../types/Auth'
import auth from '../../services/auth.service'
import { useHistory } from 'react-router-dom'
import parseJwt from '../../utils/jwt'

export default function Registration() {
    const history = useHistory()
    const [role, setRole] = useState('patient')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        let registerData: IRegister = {
            email : email,
            password: password,
            doctor: (role === "patient" ? false : true )
        };

        //TODO: instead of removing redirect(logged in) token check in api
        localStorage.removeItem("access_token")

        auth.register(registerData)
        .then((response: any) => {
            if (response && response.access) {
                localStorage.setItem("access_token", response.access)
            }
            let identity = parseJwt(response.access);
            if (identity.doctor === true) {
                //TODO: doctors page
                history.push("/app/home/")
            } else if (identity.doctor === false) {
                history.push("/gender")
            }
        })
        .catch((error: any) => {
            console.log(error)
        })
    }
    return (
        <IonPage>
            <IonContent>
                <div className='px-8 py-8 h-screen flex items-center justify-center'>
                    <div>
                        <h1 className="font-bold">Create an  account to continue :)</h1>
                        <h3 className='text-sm'>I am a ...</h3>
                        <button className={`w-full rounded-lg  py-4 flex items-center justify-center my-5 font-bold ${role == "patient" ? "bg-[#8BD3E2]" : "bg-[#F6F6F6]"}`} onClick={() => setRole("patient")}>patient</button>
                        <button className={`w-full rounded-lg py-4 flex items-center justify-center my-5 font-bold ${role == "doctor" ? "bg-[#8BD3E2]" : "bg-[#F6F6F6]"}`} onClick={() => setRole("doctor")}>medical professional </button>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">E-Mail</span>

                            </label>
                            <input type="text" className="input input-bordered w-full " onChange={handleEmail}/>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" className="input input-bordered w-full " onChange={handlePassword} />
                        </div>
                        <button onClick={handleSubmit} className='w-full rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-16 font-bold'>Create account</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
