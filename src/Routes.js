import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route path={'/home'}></Route>
        </Switch>
    );
};

export default Routes;