import React, { useState } from 'react'
import { IonPage, IonTitle, IonContent } from '@ionic/react'
import Container from '../../components/Container'
import account_circle from '../../assets/account_circle.svg'
import googleIcon from '../../assets/googleIcon.svg'
import { ILogin } from '../../types/Auth'
import auth from '../../services/auth.service'
import parseJwt from '../../utils/jwt'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        let loginData: ILogin = {
            email : email,
            password: password
        };
        
        //TODO: instead of removing redirect(logged in) token check in api
        localStorage.removeItem("access_token")

        auth.login(loginData)
        .then((response: any) => {
            if (response && response.access) {
                localStorage.setItem("access_token", response.access)
            }
            let identity = parseJwt(response.access);
            if (identity.doctor === true) {
                //TODO: doctors page
                history.push("/app/home/")
            } else if (identity.doctor === false) {
                history.push("/app/home/")
            }
        })
        .catch((error) => {
            localStorage.removeItem("access_token")
            console.log(error)
        })
    }
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
                            <input type="text" onChange={handleEmail} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" onChange={handlePassword} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button onClick={handleSubmit} className='w-full rounded-lg bg-[#8BD3E2] py-4 flex items-center justify-center mt-20 font-bold'>Login</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}