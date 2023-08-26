import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import { IonButton, IonDatetime } from '@ionic/react';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Tabs from './Tabs';

import Login from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import AuthType from './pages/auth/AuthType';
import Gender from './pages/auth/profile/Gender';
import GeneralInfo from './pages/auth/profile/GeneralInfo';
import Birthday from './pages/auth/profile/Birthday';
import Preconditions from './pages/auth/profile/Preconditions';
import Allergies from './pages/auth/profile/Allergies';

setupIonicReact();

const user = null;

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/*  */}
          <Route path="/" exact={true}>
            {user && <Redirect to="/app/home" />}
            {!user && <AuthType />}
          </Route>
          <Route path="/preconditions" exact={true}>
            {user && <Redirect to="/app/home" />}
            {!user && <Preconditions />}
          </Route>
          <Route path="/allergies" exact={true}>
            {user && <Redirect to="/app/home" />}
            {!user && <Allergies />}
          </Route>
          <Route path="/generalInfo" exact={true}>
            {user && <Redirect to="/app/home" />}
            {!user && <GeneralInfo />}
          </Route>
          <Route path="/register" exact={true}>
            {<Registration />}
          </Route>
          <Route path="/birthday" exact={true}>
            {<Birthday />}
          </Route>
          <Route path="/gender" exact={true}>
            {<Gender />}
          </Route>
          <Route path="/login" exact={true}>
            {<Login />}
          </Route>
          <Route path="/app" component={Tabs} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
