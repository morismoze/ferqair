import React from 'react';

import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import SidenavContainer from "../../containers/SidenavContainer/SidenavContainer";
import AnalyticsContainer from "../../containers/AnalyticsContainer/AnalyticsContainer";
import GroundPlanContainer from "../../containers/GroundPlanContainer/GroundPlanContainer";
import './DasboardScreen.css';

const DashboardScreen = () => {

    return (
        <>
            <HeaderContainer/>
            <div className={'mainContainer'}>
                <SidenavContainer/>
                <AnalyticsContainer/>
                <GroundPlanContainer/>
            </div>
        </>
    );
};

export default DashboardScreen;