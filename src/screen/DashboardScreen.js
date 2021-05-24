import React from 'react';

import { fetchReadingsData } from "../api/ReadingsFetchService";

const DashboardScreen = () => {
    return (
        <button onClick={fetchReadingsData}>Press</button>
    );
};

export default DashboardScreen;