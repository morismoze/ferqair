import React, {useContext} from 'react';

import ReadingCard from "../../components/ReadingCard/ReadingCard";
import ReadingContext from "../../context/ReadingContext";

const ReadingCardContainer = ({
    readingName,
    readingData,
    timestamp
}) => {
    const { toggleActiveReading, activeReading } = useContext(ReadingContext);

    return (
        <ReadingCard
            readingName={readingName}
            readingData={readingData}
            timestamp={timestamp}
            onCardClick={toggleActiveReading}
            activeReading={activeReading}
        />
    );
};

export default ReadingCardContainer;