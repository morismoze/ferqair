import React, {useContext} from 'react';

import HeaderContainer from "../../containers/HeaderContainer/HeaderContainer";
import SidenavContainer from "../../containers/SidenavContainer/SidenavContainer";
import AnalyticsContainer from "../../containers/AnalyticsContainer/AnalyticsContainer";
import GroundPlanContainer from "../../containers/GroundPlanContainer/GroundPlanContainer";
import GroundPlanContext from "../../context/GroundPlanContext";
import './DasboardScreen.css';

const DashboardScreen = () => {
    const { groundPlanActive } = useContext(GroundPlanContext);

    return (
        <>
            <HeaderContainer/>
            <div className={'mainContainer'}>
                <SidenavContainer/>
                <AnalyticsContainer/>
                {groundPlanActive &&
                    <GroundPlanContainer/>
                }
            </div>
        </>
    );
};

export default DashboardScreen;