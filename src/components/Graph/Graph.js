import React from 'react';

import { Line } from "react-chartjs-2";

import {ReactComponent as NoData} from "../../modules/images/svg/no-data.svg";
import './Graph.css';

const Graph = ({
    activeRoom,
    graphData,
    options
}) => {
    return (
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
                options={options}
            />
            {graphData.labels.length === 0 &&
                <NoData className={'noData'}/>
            }
        </div>
    );
};

export default Graph;