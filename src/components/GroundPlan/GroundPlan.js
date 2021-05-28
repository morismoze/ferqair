import React, {useEffect} from 'react';

import {ReactComponent as GroundPlanMap} from "../../modules/images/svg/rooms_ground_plan.svg";
import {currentRooms} from "../../modules/constants/rooms";
import './GroundPlan.css';

const GroundPlan = ({
    activeRoom,
    onRoomClick
}) => {
    useEffect(() => {
        const rooms = document.querySelectorAll('.groundPlan path');

        Array.from(rooms).forEach(room => {
            if(currentRooms.indexOf(room.id.toString()) === -1) {
                room.setAttribute('disabled','true');
            }
        });
    }, []);

    useEffect(() => {
        const currentActiveRoom = document.getElementById(activeRoom.toString());

        if(currentActiveRoom) {
            currentActiveRoom.classList.add('activePathRoom');
        }
    }, [activeRoom]);

    return (
        <div className={'groundPlanWrapper'}>
            <GroundPlanMap
                onClick={onRoomClick}
                className={'groundPlan'}
            />
        </div>
    );
};

export default GroundPlan;