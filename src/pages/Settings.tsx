import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Route, Redirect } from "react-router";
import Feed from "./Feed";
import AccountSettings from "./AccountSettings";

const Settings: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route path="/app/settings/account" component={AccountSettings} />

      <Route exact path="/app/settings">
        <Redirect to="/app/settings/account" />
      </Route>
    </IonRouterOutlet>
  );
};

export default Settings;
