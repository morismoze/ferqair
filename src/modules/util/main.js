export const filterRooms = items => {
    let rooms = new Set();

    items.forEach(readingObj => {
        rooms.add(readingObj.ROOM_ID);
    });

    return [...rooms];
};

export const getData = (items, rooms) => {
    let dataMap = new Map();

    rooms.forEach(room => {
       dataMap.set(room, {
           temperature: [],
           humidity: [],
           pressure: [],
           no2: [],
           co: [],
           timestamps: []
       });
    });

    items.forEach((item, index) => {
        dataMap.get(item.ROOM_ID).temperature.push(item.READING.temp);
        dataMap.get(item.ROOM_ID).humidity.push(item.READING.hum);
        dataMap.get(item.ROOM_ID).pressure.push(item.READING.pres);
        dataMap.get(item.ROOM_ID).no2.push(item.READING.no2);
        dataMap.get(item.ROOM_ID).co.push(item.READING.co);
        dataMap.get(item.ROOM_ID).timestamps.push(item.TIMESTAMP);
    });

    return dataMap;
}