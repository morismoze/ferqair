import React, {useContext, useEffect, useState} from 'react';

import Graph from "../../components/Graph/Graph";
import RoomContext from "../../context/RoomContext";
import './AnalyticsContainer.css';
import ReadingContext from "../../context/ReadingContext";

const AnalyticsContainer = () => {
    const [ datasets, setDatasets ] = useState(null);

    const { activeRoom } = useContext(RoomContext);

    const { data } = useContext(ReadingContext);
console.log(data)
    useEffect(() => {
        let temp = [];

        if(data) {
            Object.keys(data.get(activeRoom)).forEach(reading => {
                temp.push({
                    label: 'label',
                    data: [...reading],
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                });
            });
        }

        setDatasets(temp);
    }, []);

    const graphData = {
        labels: data?.get(activeRoom).timestamps,
        datasets: datasets
    };

    return (
        <div className={'analyticsContainer'}>
            <Graph
                activeRoom={activeRoom}
                graphData={graphData}
            />
            <div className={'readingsContainer'}>

            </div>
        </div>
    );
};

export default AnalyticsContainer;