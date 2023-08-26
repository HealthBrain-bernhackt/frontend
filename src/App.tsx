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

setupIonicReact();

const user = {};

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/*  */}
          <Route path="/" exact={true}>
            {user && <Redirect to="/app/home" />}
            {!user && <Login />}
          </Route>
          <Route path="/registration" exact={true}>
            {<Registration />}
          </Route>
          <Route path="/app" component={Tabs} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
