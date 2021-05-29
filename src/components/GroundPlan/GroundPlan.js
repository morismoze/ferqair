import React, {useEffect} from 'react';

import {ReactComponent as GroundPlanMap} from "../../modules/images/svg/rooms_ground_plan.svg";
import {currentRooms} from "../../modules/constants/rooms";
import './GroundPlan.css';

const GroundPlan = ({
    activeRoom,
    onRoomClick,
    isModalOpen,
    toggleModal
}) => {
    useEffect(() => {
        const rooms = document.querySelectorAll('.groundPlan path');

        Array.from(rooms).forEach(room => {
            if(currentRooms.indexOf(room.id.toString()) === -1) {
                room.setAttribute('disabled','true');
            }
        });
    }, [isModalOpen]);

    useEffect(() => {
        const currentActiveRoom = document.getElementById(activeRoom.toString());

        if(currentActiveRoom) {
            currentActiveRoom.classList.add('activePathRoom');
        }
    }, [activeRoom, isModalOpen]);

    return (
        <>
            {isModalOpen &&
                <div className={'groundPlanModal'}>
                    <span
                        className={'closeModalBtn'}
                        onClick={toggleModal}
                    >
                        &#10005;
                    </span>
                    <div className={'groundPlanWrapper'}>
                        <GroundPlanMap
                            onClick={onRoomClick}
                            className={'groundPlan'}
                        />
                    </div>
                </div>
            }
        </>
    );
};

export default GroundPlan;