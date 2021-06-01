import React, { useEffect, useState } from 'react';

import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import RoomContext from "./context/RoomContext";
import ReadingContext from "./context/ReadingContext";
import {currentRooms} from "./modules/constants/rooms";
import {fetchReadingsData} from "./api/ReadingsFetchService";
import {getData} from "./modules/util/main";
import './App.css';
import GroundPlanContext from "./context/GroundPlanContext";

function App() {
    const [ rooms, setRooms ] = useState(null);

    const [ activeRoom, setActiveRoom ] = useState(currentRooms[0]);

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
        setRooms(currentRooms);
        (async () => {
            const items = await fetchReadingsData(activeRoom);

            if(items) {
                const data = getData(items.Items, activeRoom);
                setData(data);
            } else {
                setData([]);
            }
        })();
    }, []);

    return (
        <ReadingContext.Provider value={{ graphData, activeReading, toggleActiveReading }}>
            <RoomContext.Provider value={{ rooms, activeRoom, toggleActiveRoom, groundPlanActive, setData }}>
                <GroundPlanContext.Provider value={{ groundPlanActive, toggleGroundPlan }}>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                </GroundPlanContext.Provider>
            </RoomContext.Provider>
        </ReadingContext.Provider>
    );
}

export default App;
