import React, {useContext} from 'react';

import Graph from "../../components/Graph/Graph";
import RoomContext from "../../context/RoomContext";
import ReadingContext from "../../context/ReadingContext";
import {readingsColors} from "../../modules/styles/readingsColors";
import './AnalyticsContainer.css';
import ReadingCardContainer from "../ReadingCardContainer/ReadingCardContainer";
import {translateReading} from "../../modules/util/main";

const AnalyticsContainer = () => {
    const { activeRoom } = useContext(RoomContext);

    const { graphData, activeReading } = useContext(ReadingContext);

    const formatData = () => {
        let temporary = [];

        if(graphData && activeRoom) {
            temporary.push({
                label: translateReading(activeReading),
                data: graphData[activeReading],
                fill: false,
                backgroundColor: readingsColors[activeReading],
                borderColor: readingsColors[activeReading],
                color: '#FFF'
            });
        }

        return temporary;
    };

    const getLabels = () => {
      if(graphData && graphData.timestamps) {
          return graphData.timestamps;
      } else {
          return [];
      }
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#FFF"
                }
            }],
            xAxes: [{
                ticks: {
                    color: 'white',
                    fontSize: 18
                }
            }]
        }
    };

    const getReadings = (arr) => {
        arr.pop();
        return arr;
    };

    return (
            <div className={'analyticsContainer'}>
                <Graph
                    activeRoom={activeRoom}
                    graphData={{
                        labels: getLabels(),
                        datasets: formatData()
                    }}
                    options={options}
                />
                <div className={'readingsContainer'}>
                    {graphData && getReadings(Object.keys(graphData)).map((reading, index) => (
                        <ReadingCardContainer
                            readingName={reading}
                            readingData={graphData[reading][graphData[reading].length - 1]}
                            timestamp={graphData['timestamps'][graphData[reading].length - 1]}
                            key={reading+index}
                        />
                    ))}
                </div>
            </div>
    );
};

export default AnalyticsContainer;