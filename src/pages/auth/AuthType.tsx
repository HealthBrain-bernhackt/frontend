import { IonPage, IonTitle, IonContent } from '@ionic/react'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function AuthType() {
    return (
        <IonPage>
            <IonContent>
            <div className='px-8 py-8 h-screen flex  items-center'>
                    <div className="h-fit bg-white w-full" >
                        <h1 className="text-2xl font-semibold mb-10">Page Title</h1>
                        <Button>
                            {/* insert svg */}
                            Continue with Google
                        </Button>
                        <div className="flex items-center mb-7 mt-7">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-gray-500">or</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>
                        <Button>
                            Login with email
                        </Button>
                        <Button>
                            Register
                        </Button>
                    </div>

                    </div>
            </IonContent>
        </IonPage>
    )
}
