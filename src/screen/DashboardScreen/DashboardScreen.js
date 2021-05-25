import React from 'react';

import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import SidenavContainer from "../../containers/SidenavContainer/SidenavContainer";
import AnalyticsContainer from "../../containers/AnalyticsContainer/AnalyticsContainer";
import './DasboardScreen.css';

const DashboardScreen = () => {
    return (
        <>
            <HeaderContainer/>
            <div className={'mainContainer'}>
                <SidenavContainer/>
                <AnalyticsContainer/>
            </div>
        </>
    );
};

export default DashboardScreen;