import React from 'react';

import { ReactComponent as RoomSvg } from "../../modules/images/svg/room_svg.svg";
import { ReactComponent as RoomsMap } from "../../modules/images/svg/map_svg.svg";
import { ReactComponent as RealSensor } from "../../modules/images/svg/real_sensor.svg";
import './RoomCard.css';
import classNames from "classnames";

const RoomCard = ({
    roomName,
    activeRoom,
    onRoomClick,
    image = 'ground-plan',
    realSensor
}) => {
    return (
        <div
            className={
                classNames({
                    'roomCard': true,
                    'active': activeRoom === roomName,
                    'realSensor': realSensor === true
                })
            }
            onClick={() => onRoomClick(roomName)}
        >
            {image === 'map' ?
                <RoomsMap/>
                :
                <RoomSvg className={'roomImg'}/>
            }
            <span className={'roomName'}>{roomName}</span>
            {realSensor === true &&
                <RealSensor className={'realSensorImg'}/>
            }
        </div>
    );
};

export default RoomCard;