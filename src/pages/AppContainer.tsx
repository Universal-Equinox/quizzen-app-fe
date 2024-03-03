import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { home, addCircle, person } from "ionicons/icons";
import React from "react";
import { Route, Redirect } from "react-router";
import Feed from "./Feed";
import PostDetail from "./PostDetail";
import Profile from "./Profile";
import NewPost from "./NewPost";
import Settings from "./Settings";

const AppContainer: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/app/feed" />
        </Route>
        <Route path="/app/feed" component={Feed} />
        <Route path="/app/post/:id" component={PostDetail} />
        <Route path="/app/profile" component={Profile} />
        <Route path="/app/settings" component={Settings} />
        <Route path="/app/new-post" component={NewPost} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        {/* FEED */}
        <IonTabButton tab="feed" href="/app/feed">
          <IonIcon aria-hidden="true" size="large" icon={home} />
        </IonTabButton>

        {/* NEW-POST */}
        <IonTabButton tab="new-post" href="/app/new-post">
          <IonIcon aria-hidden="true" size="large" icon={addCircle} />
        </IonTabButton>

        {/* PROFILE */}
        <IonTabButton tab="profile" href="/app/profile">
          <IonIcon aria-hidden="true" size="large" icon={person} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppContainer;
