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
import DoctorMain from './pages/doctor/DoctorMain';
import PatientInfo from './pages/doctor/PatientInfo';
import PrescribeMedicine from './pages/doctor/PrescribeMedicine';
setupIonicReact();



function App() {
  let user = localStorage.getItem("access_token");
  console.log(user)
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/*  */}
          <Route path="/" exact={true}>
            {<Redirect to="/auth_type" />}
          </Route>
          <Route path="/preconditions" exact={true}>
            {<Preconditions />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/allergies" exact={true}>
            { <Allergies />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/generalInfo" exact={true}>
            { <GeneralInfo />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/register" exact={true}>
            <Registration />
  
          </Route>
          <Route path="/auth_type" exact={true}>
            {<AuthType />}
          </Route>
          <Route path="/birthday" exact={true}>
            { <Birthday />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/gender" exact={true}>
            { <Gender />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/login" exact={true}>
            {<Login />}
          </Route>
          <Route path="/doc/home" exact={true}>
            {<DoctorMain />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/doc/patientInfo/:userId" exact={true}>
            { <PatientInfo />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/doc/prescribeMed/:userId" exact={true}>
            { <PrescribeMedicine />}
            {/* {!user && <Redirect to="/auth_type" />} */}
          </Route>
          <Route path="/app" component={Tabs} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
