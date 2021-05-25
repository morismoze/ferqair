import React from 'react';

import './Sidenav.css';
import RoomCard from "../RoomCard/RoomCard";

const Sidenav = ({
    rooms,
    activeRoom,
    toggleActiveRoom,
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
            {rooms?.map((roomName, index) => (
                <RoomCard
                    roomName={roomName}
                    activeRoom={activeRoom}
                    onRoomClick={toggleActiveRoom}
                    key={roomName + index}
                />
            ))}
        </nav>
    );
};

export default Sidenav;