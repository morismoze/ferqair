import React, { useContext } from 'react';

import Sidenav from "../../components/Sidenav/Sidenav";
import RoomContext from "../../context/RoomContext";
import {fetchReadingsData} from "../../api/ReadingsFetchService";
import {getData} from "../../modules/util/main";
import GroundPlanContext from "../../context/GroundPlanContext";

const SidenavContainer = () => {
    const { rooms, activeRoom, toggleActiveRoom, setData } = useContext(RoomContext);

    const { toggleGroundPlan } = useContext(GroundPlanContext);

    const onRoomClick = async (roomName) => {
        toggleActiveRoom(roomName);

        const items = await fetchReadingsData(roomName);
        if(items) {
            const data = getData(items.Items, roomName);
            setData(data);
        } else {
            setData([]);
        }
    };

    return (
        <Sidenav
            rooms={rooms}
            activeRoom={activeRoom}
            onRoomClick={onRoomClick}
            toggleGroundPlan={toggleGroundPlan}
        />
    );
};

export default SidenavContainer;