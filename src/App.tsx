import { Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonModal,
  IonNav,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addCircle, home, person } from "ionicons/icons";

import Feed from "./pages/Feed";

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
import PostDetail from "./pages/PostDetail";
import QuizzenHeader from "./components/QuizzenHeader";

import { useState } from "react";
import LoginModal from "./components/LoginModal";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";

setupIonicReact();

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoginPage, setshowLoginPage] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <IonApp>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/">
                <IonNav root={() => <Feed />}></IonNav>
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>

              <Route exact path="/new-post">
                <NewPost />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="feed" href="/">
                <IonIcon aria-hidden="true" size="large" icon={home} />
              </IonTabButton>
              <IonTabButton tab="new-post" href="/new-post">
                <IonIcon aria-hidden="true" size="large" icon={addCircle} />
              </IonTabButton>
              {/* <IonTabButton tab="login" onClick={() => setShowModal(true)}>
                <IonIcon aria-hidden="true" size="large" icon={person} />
              </IonTabButton> */}
              <IonTabButton
                tab="login"
                // TODO: burayı düzenle
                onClick={() =>
                  authenticated
                    ? setshowLoginPage(false)
                    : setshowLoginPage(true)
                }
                href={authenticated ? "/profile" : "/login"}
              >
                <IonIcon aria-hidden="true" size="large" icon={person} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>

        {/* <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
        {showLoginPage && <Login />}
      </IonContent>
    </IonApp>
  );
};

export default App;
