import React from 'react';

import { ReactComponent as RoomSvg } from "../../modules/images/svg/room_svg.svg";
import { ReactComponent as RoomsMap } from "../../modules/images/svg/map_svg.svg";
import './RoomCard.css';

const RoomCard = ({
    roomName,
    activeRoom,
    onRoomClick,
    image = 'ground-plan'
}) => {
    return (
        <div
            className={activeRoom === roomName ? 'roomCard active' : 'roomCard'}
            onClick={() => onRoomClick(roomName)}
        >
            {image === 'map' ?
                <RoomsMap/>
                :
                <RoomSvg/>
            }
            <span className={'roomName'}>{roomName}</span>
        </div>
    );
};

export default RoomCard;