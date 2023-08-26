import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { chatbubble, home, personCircle } from "ionicons/icons"
import { Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import ChatAI from './pages/ChatAI';
import ContactDoctor from './pages/ContactDoctor';


const user = {
    name: "John Doe",
};

export default function Tabs() {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <IonRouterOutlet>
                        <Route path="/app/home" render={() => <Home />} exact={true} />
                        <Route path="/app/chat" render={() => <Chat />} exact={true} />
                        <Route path="/app/profile" render={() => <Profile />} exact={true} />
                        <Route path="/app/chatAI" render={() => <ChatAI />} exact={true} />
                        <Route path="/app/contactDoctor" render={() => <ContactDoctor />} exact={true} />
                    </IonRouterOutlet>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/app/home/">
                        <IonIcon icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="chat" href="/app/chat/">
                        <IonIcon icon={chatbubble} />
                        <IonLabel>Chat</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="profile" href="/app/profile/">
                        <IonIcon icon={personCircle} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}
