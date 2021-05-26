import React from 'react';

import { ReactComponent as Timestamp } from '../../modules/images/svg/timestamp.svg';
import './ReadingCard.css';
import {getReadingUnit} from "../../modules/util/main";

const ReadingCard = ({
    readingData,
    readingName,
    timestamp,
    onCardClick
}) => {
    const unit = getReadingUnit(readingName);

    return (
        <div
            className={'readingCard ' + readingName}
            onClick={() => onCardClick(readingName)}
        >
            <div className={'readingCardHeader'}>
                <h3 className={'readingName'}>{readingName}</h3>
                <div className={'timestamp'}>
                    <Timestamp/>
                    <span className={'timestampValue'}>{timestamp}</span>
                </div>
            </div>
            <div className={'dataWrapper'}>
                <span className={'readingValue'}>{readingData}</span>
                <sup className={'readingUnit'}>{unit}</sup>
            </div>
        </div>
    );
};

export default ReadingCard;