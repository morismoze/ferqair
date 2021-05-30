import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardScreen from "./screen/DashboardScreen/DashboardScreen";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <DashboardScreen/>
            </Route>
        </Switch>
    );
};

export default Routes;