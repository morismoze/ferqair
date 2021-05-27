export const filterRooms = items => {
    let rooms = new Set();

    items.forEach(readingObj => {
        rooms.add(readingObj.ROOM_ID);
    });

    return [...rooms];
};

export const getData = items => {
    let data = {};

    data = {
        temperature: [],
        humidity: [],
        pressure: [],
        no2: [],
        co: [],
        timestamps: []
    }

    items.forEach(item => {
        data.temperature.push(item.READING.temp);
        data.humidity.push(item.READING.hum);
        data.pressure.push(item.READING.pres);
        data.no2.push(item.READING.no2);
        data.co.push(item.READING.co);

        const date = new Date(item.TIMESTAMP);

        data.timestamps.push(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    });

    return data;
}

export const getReadingUnit = (reading) => {
  switch (reading) {
      case 'temperature': {
          return '°C';
      }
      case 'humidity': {
          return '%';
      }
      case 'pressure': {
          return 'Pa';
      }
      case 'no2':
      case 'co': {
          return 'ppm';
      }
      default: {
          return '';
      }
  }
};

export const translateReading = readingName => {
    switch (readingName) {
        case 'temperature': {
            return 'Temperatura';
        }
        case 'humidity': {
            return 'Vlaga';
        }
        case 'pressure': {
            return 'Tlak';
        }
        case 'no2':{
            return 'NO2';
        }
        case 'co': {
            return 'CO';
        }
        default: {
            return '';
        }
    }
}