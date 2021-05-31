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
        const rooms = document.querySelectorAll('.groundPlan .group');

        Array.from(rooms).forEach(group => {
            Array.from(group.children).forEach(child => {
                if(child.classList.contains('room') && currentRooms.indexOf(child.id.toString()) === -1) {
                    group.setAttribute('disabled','true');
                } else if (child.classList.contains('room')){
                    group.setAttribute('disabled','false');
                }
            });
        });
    }, [isModalOpen]);

    useEffect(() => {
        const currentActiveRoom = document.getElementById(activeRoom.toString());

        if(currentActiveRoom) {
            currentActiveRoom.classList.add('activePathRoom');
        }
    }, [activeRoom, isModalOpen]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, []);

    return (
        <div className={'groundPlanModal'}>
            <span
                className={'closeModalBtn'}
                onClick={toggleModal}
            >
                &#10005;
            </span>
            <div className={'activeRoomLabelWrapper'}>
                <span className={'activeRoomLabel'}/>
                <span className={'activeRoomLabelName'}>Trenutno aktivna prostorija</span>
            </div>
            <div className={'groundPlanWrapper'}>
                <GroundPlanMap
                    onClick={onRoomClick}
                    className={'groundPlan'}
                />
            </div>
        </div>
    );
};

export default GroundPlan;