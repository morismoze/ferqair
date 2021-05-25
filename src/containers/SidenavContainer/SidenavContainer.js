import React, { useContext } from 'react';

import Sidenav from "../../components/Sidenav/Sidenav";
import RoomContext from "../../context/RoomContext";

const SidenavContainer = () => {
    const { rooms, activeRoom, toggleActiveRoom, toggleGroundPlan } = useContext(RoomContext);

    return (
        <Sidenav
            rooms={rooms}
            activeRoom={activeRoom}
            toggleActiveRoom={toggleActiveRoom}
            toggleGroundPlan={toggleGroundPlan}
        />
    );
};

export default SidenavContainer;