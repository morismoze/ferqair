import React, {useContext, useEffect, useState} from 'react';

import Graph from "../../components/Graph/Graph";
import RoomContext from "../../context/RoomContext";
import ReadingContext from "../../context/ReadingContext";
import {readingsColors} from "../../modules/styles/readingsColors";
import './AnalyticsContainer.css';

const AnalyticsContainer = () => {
    const { activeRoom } = useContext(RoomContext);

    const { graphData } = useContext(ReadingContext);

    const formatData = () => {
        let temporary = [];

        if(graphData && activeRoom) {
            temporary.push({
                label: 'temperature',
                data: graphData.temperature,
                fill: false,
                backgroundColor: readingsColors['temperature'],
                borderColor: readingsColors['temperature'],
            });
        }

        return temporary;
    };

    const getLabels = () => {
      if(graphData && graphData.timestamps) {
          return graphData.timestamps;
      }
    };

    return (
            <div className={'analyticsContainer'}>
                <Graph
                    activeRoom={activeRoom}
                    graphData={{
                        labels: getLabels(),
                        datasets: formatData()
                    }}
                />
                <div className={'readingsContainer'}>

                </div>
            </div>
    );
};

export default AnalyticsContainer;