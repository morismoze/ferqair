import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import DashboardScreen from "./screen/DashboardScreen/DashboardScreen";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <Redirect to="/dashboard"/>
            </Route>
            <Route path={'/dashboard'}>
                <DashboardScreen/>
            </Route>
        </Switch>
    );
};

export default Routes;