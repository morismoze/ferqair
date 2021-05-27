import React, { useEffect, useState } from 'react';

import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import RoomContext from "./context/RoomContext";
import ReadingContext from "./context/ReadingContext";
import {roomsObj} from "./modules/constants/rooms";
import {fetchReadingsData} from "./api/ReadingsFetchService";
import {getData} from "./modules/util/main";
import './App.css';

function App() {
    const [ rooms, setRooms ] = useState(null);

    const [ activeRoom, setActiveRoom ] = useState(roomsObj[0]);

    const [ groundPlanActive, setGroundPlanActive ] = useState(false);

    const [graphData, setGraphData] = useState(null);

    const [activeReading, setActiveReading] = useState('temperature');

    const toggleActiveRoom = room => {
        setActiveRoom(room);
    }

    const toggleGroundPlan = () => {
      setGroundPlanActive(!groundPlanActive);
    };

    const setData = (data) => {
        setGraphData(data);
    };

    const toggleActiveReading = (reading) => {
        setActiveReading(reading);
    }

    useEffect(() => {
        setRooms(roomsObj);
        (async () => {
            const items = await fetchReadingsData(activeRoom);
            const data = getData(items.Items, activeRoom);
            setData(data);
        })();
    }, []);

    return (
        <ReadingContext.Provider value={{ graphData, activeReading, toggleActiveReading }}>
            <RoomContext.Provider value={{ rooms, activeRoom, toggleActiveRoom, groundPlanActive, toggleGroundPlan, setData }}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </RoomContext.Provider>
        </ReadingContext.Provider>
    );
}

export default App;
