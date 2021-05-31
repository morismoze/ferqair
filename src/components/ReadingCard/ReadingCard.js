import React from 'react';

import { ReactComponent as Timestamp } from '../../modules/images/svg/timestamp.svg';
import {getReadingUnit, translateReading} from "../../modules/util/main";
import './ReadingCard.css';

const ReadingCard = ({
    readingData,
    readingName,
    timestamp,
    onCardClick,
    activeReading
}) => {
    const unit = getReadingUnit(readingName);

    return (
        <div
            className={
                activeReading === readingName
                    ?
                    `readingCard ${readingName} activeReading`
                    :
                    `readingCard ${readingName}`
            }
            onClick={() => onCardClick(readingName)}
        >
            <div className={'readingCardHeader'}>
                <h3 className={'readingName'}>{translateReading(readingName)}</h3>
                <div className={'timestamp'}>
                    <Timestamp/>
                    <span className={'timestampValue'}>{timestamp}</span>
                </div>
            </div>
            <div className={'dataWrapper'}>

                {readingData ?
                    <>
                        <span className={'readingValue'}>{readingData}</span>
                        <sup className={'readingUnit'}>{unit}</sup>
                    </>
                    :
                    <>
                        <span className={'dataError'}>Greška pri dohvatu podataka</span>
                    </>

                }
            </div>
            {activeReading === readingName &&
                <div className={'activeReadingTick'}/>
            }
        </div>
    );
};

export default ReadingCard;