import React, {useContext} from 'react';

import GroundPlan from "../../components/GroundPlan/GroundPlan";
import RoomContext from "../../context/RoomContext";
import {currentRooms} from "../../modules/constants/rooms";
import {fetchReadingsData} from "../../api/ReadingsFetchService";
import {getData} from "../../modules/util/main";
import GroundPlanContext from "../../context/GroundPlanContext";

const GroundPlanContainer = () => {
    const { activeRoom, toggleActiveRoom, setData } = useContext(RoomContext);

    const { groundPlanActive, toggleGroundPlan } = useContext(GroundPlanContext);

    const onRoomClick = async (event) => {
        const clickedRoom = event.target.id;

        if(currentRooms.indexOf(clickedRoom) !== -1 && clickedRoom !== activeRoom) {
            toggleActiveRoom(clickedRoom);

            const previousActiveRoom = document.getElementsByClassName('activePathRoom')[0];
            previousActiveRoom.classList.remove('activePathRoom');

            const items = await fetchReadingsData(clickedRoom);
            const data = getData(items.Items, clickedRoom);
            setData(data);
        }
    };

    return (
        <GroundPlan
            activeRoom={activeRoom}
            onRoomClick={onRoomClick}
            isModalOpen={groundPlanActive}
            toggleModal={toggleGroundPlan}
        />
    );
};

export default GroundPlanContainer;