import React, { useEffect, useState } from 'react';

import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import RoomContext from "./context/RoomContext";
import ReadingContext from "./context/ReadingContext";
import './App.css';
import {roomsObj} from "./modules/constants/rooms";

function App() {
    const [ rooms, setRooms ] = useState(null);

    const [ activeRoom, setActiveRoom ] = useState(null);

    const [ groundPlanActive, setGroundPlanActive ] = useState(false);

    const [graphData, setGraphData] = useState(null);

    const toggleActiveRoom = room => {
        setActiveRoom(room);
    }

    const toggleGroundPlan = () => {
      setGroundPlanActive(!groundPlanActive);
    };

    const setData = (data) => {
        setGraphData(data);
    };

    useEffect(() => {
        setRooms(roomsObj);
    }, []);

    return (
        <ReadingContext.Provider value={{ graphData }}>
            <RoomContext.Provider value={{ rooms, activeRoom, toggleActiveRoom, groundPlanActive, toggleGroundPlan, setData }}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </RoomContext.Provider>
        </ReadingContext.Provider>
    );
}

export default App;
