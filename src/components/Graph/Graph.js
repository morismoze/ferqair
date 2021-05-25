import React from 'react';

import { Line } from "react-chartjs-2";

import './Graph.css';

const Graph = ({
    activeRoom,
    graphData
}) => {

    return (
        <>
            {graphData &&
                <div className={'graphContainer'}>
                    {activeRoom &&
                    <h1 className={'roomNameTitle'}>
                        <span className={'graphRoomName'}>{activeRoom}</span>
                        <span> - Analitika</span>
                    </h1>
                    }
                    <Line
                        className={'graph'}
                        data={graphData}
                    />
                </div>
            }
        </>
    );
};

export default Graph;