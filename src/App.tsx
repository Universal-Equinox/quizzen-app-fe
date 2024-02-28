import { Route, useHistory } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import AppContainer from "./pages/AppContainer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
setupIonicReact();

const App: React.FC = () => {
  const history = useHistory();

  return (
    <IonApp>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" component={AppContainer} />

            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonContent>
    </IonApp>
  );
};

export default App;
