import { Redirect, Route, useHistory } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonIcon,
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

import { useEffect, useState } from "react";
import Profile from "./pages/Profile";
import Modal from "./components/Modal";
import LoginCard from "./components/LoginCard";
import NewPostCard from "./components/NewPostCard";
import PostDetail from "./pages/PostDetail";
setupIonicReact();

const App: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const history = useHistory();

  return (
    <IonApp>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/">
                <Redirect to="/feed" />
              </Route>
              <Route exact path="/post/:id" component={PostDetail} />
              <Route exact path="/profile" component={Profile} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              {/* FEED */}
              <IonTabButton tab="feed" href="/">
                <IonIcon aria-hidden="true" size="large" icon={home} />
              </IonTabButton>

              {/* NEW-POST */}
              <IonTabButton
                tab="new-post"
                // href="/new-post"
                onClick={() => setShowNewPostModal(true)}
              >
                <IonIcon aria-hidden="true" size="large" icon={addCircle} />
              </IonTabButton>

              {/* PROFILE */}
              <IonTabButton
                tab="profile"
                href="/profile"
                // onClick={() => setShowLoginModal(true)}
              >
                <IonIcon aria-hidden="true" size="large" icon={person} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>

        <Modal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          showAlert={false}
        >
          <LoginCard />
        </Modal>

        <Modal
          isOpen={showNewPostModal}
          onClose={() => setShowNewPostModal(false)}
          showAlert={true}
        >
          <NewPostCard />
        </Modal>
      </IonContent>
    </IonApp>
  );
};

export default App;
