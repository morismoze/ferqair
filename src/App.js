import React, { useEffect, useState } from 'react';

import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import RoomContext from "./context/RoomContext";
import ReadingContext from "./context/ReadingContext";
import {filterRooms, getData} from "./modules/util/main";
import {fetchReadingsData} from "./api/ReadingsFetchService";
import './App.css';

function App() {
    const [ rooms, setRooms ] = useState(null);

    const [ activeRoom, setActiveRoom ] = useState(null);

    const [ groundPlanActive, setGroundPlanActive ] = useState(false);

    const [data, setData] = useState(null);

    const toggleActiveRoom = room => {
        setActiveRoom(room);
    }

    const toggleGroundPlan = () => {
      setGroundPlanActive(!groundPlanActive);
    };

    useEffect(() => {
        (async () => {
            const response = await fetchReadingsData();
            if(response) {
                const roomsObj = filterRooms(response.Items);
                setRooms(roomsObj);
                toggleActiveRoom(roomsObj[0]);

                const data = getData(response.Items, roomsObj);
                setData(data);
            }
        })();
    }, []);

    return (
        <ReadingContext.Provider value={{ data }}>
            <RoomContext.Provider value={{ rooms, activeRoom, toggleActiveRoom, groundPlanActive, toggleGroundPlan }}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </RoomContext.Provider>
        </ReadingContext.Provider>
    );
}

export default App;
