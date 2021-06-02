import React from 'react';

import RoomCard from "../RoomCard/RoomCard";
import {realSensorRooms} from "../../modules/constants/rooms";
import './Sidenav.css';

const Sidenav = ({
    rooms,
    activeRoom,
    onRoomClick,
    toggleGroundPlan
}) => {
    return (
        <nav className={'roomsNav'}>
            <RoomCard
                roomName={'Tlocrt prostora'}
                onRoomClick={toggleGroundPlan}
                image={'map'}
            />
            <h3 className={'roomsNav-title'}>Prostorije</h3>
            <div className={'roomCardsContainer'}>
                {rooms?.map((roomName, index) => (
                    <RoomCard
                        roomName={roomName}
                        activeRoom={activeRoom}
                        onRoomClick={() => onRoomClick(roomName)}
                        realSensor={realSensorRooms.includes(roomName)}
                        key={roomName + index}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Sidenav;