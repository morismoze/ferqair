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
        const parentElement = event.currentTarget.children;

        if(currentRooms.indexOf(clickedRoom) !== -1) {
            toggleActiveRoom(clickedRoom);

            for (const child of parentElement) {
                if (child.classList.contains('activePathRoom')) {
                    child.classList.remove('activePathRoom');
                    break;
                }
            }

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