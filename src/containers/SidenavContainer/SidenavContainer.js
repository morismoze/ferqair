import React, { useContext } from 'react';

import Sidenav from "../../components/Sidenav/Sidenav";
import RoomContext from "../../context/RoomContext";
import {fetchReadingsData} from "../../api/ReadingsFetchService";
import {getData} from "../../modules/util/main";

const SidenavContainer = () => {
    const { rooms, activeRoom, toggleActiveRoom, toggleGroundPlan, setData } = useContext(RoomContext);

    const onRoomClick = async (roomName) => {
        toggleActiveRoom(roomName);
        const items = await fetchReadingsData(roomName);
        const data = getData(items.Items, roomName);
        setData(data);
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