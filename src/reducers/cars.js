/* eslint-disable prefer-destructuring */
const initialState = {
  cars: [
    {
      id: '1',
      makeId: 'BMW',
      model: 'E93',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta Aliquam euismod lacus non est egesta',
      price: 13823,
      image: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/hnAAAOSwCjpcLKQQ/$_20.jpg',
      engine: 'Diesel',
      vehicleType: 'Cabriolet',
      location: 'Minsk',
      transmission: 'Manual gearbox',
    },
    {
      id: '2',
      makeId: 'BMW',
      model: 'E92',
      description: 'elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 14953,
      image: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/4MQAAOSw8V9bTYjF/$_20.jpg',
      engine: 'Petrol',
      vehicleType: 'Coupe',
      location: 'Brest',
      transmission: 'Automatic transmission',
    },
    {
      id: '3',
      makeId: 'BMW',
      model: 'E46',
      description: 'consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. liquam euismod lacus non est egesta. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 7764,
      image: 'https://i.ebayimg.com/00/s/MzIzWDQzMA==/z/jXUAAOSw9m5cNLKh/$_20.jpg',
      engine: 'Hybrid',
      vehicleType: 'Estate Car',
      location: 'Minsk',
      transmission: 'Automatic transmission',
    },
    {
      id: '4',
      makeId: 'Audi',
      model: 'A4',
      description: 'Nullam ultricies lorem oddfio, at laoreetsdfdsf tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta. Aliquam euismod lacus non est egesta',
      price: 11674,
      image: 'https://i.ebayimg.com/00/s/NDI0WDY0MA==/z/ckoAAOSw~atcGVx5/$_20.jpg',
      engine: 'Petrol',
      vehicleType: 'Saloon',
      location: 'Minsk',
      transmission: 'Automatic transmission',
    },
    {
      id: '5',
      makeId: 'Audi',
      model: 'A6',
      description: 'maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 12680,
      image: 'https://i.ebayimg.com/00/s/OTA2WDE2MDA=/z/2pcAAOSwDYdcN1ar/$_20.jpg',
      engine: 'Petrol',
      vehicleType: 'Saloon',
      location: 'Grodno',
      transmission: 'Automatic transmission',
    },
    {
      id: '6',
      makeId: 'Mercede-Benz',
      model: 'G-Klasse',
      description: 'at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum',
      price: 17674,
      image: 'https://i.ebayimg.com/00/s/NDgwWDYwMQ==/z/kLEAAOSwsrlcNoQb/$_20.jpg',
      engine: 'Petrol',
      vehicleType: 'Off-road Vehicle ',
      location: 'Minsk',
      transmission: 'Manual gearbox',
    },
    {
      id: '7',
      makeId: 'BMW',
      model: 'E93',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 14900,
      image: 'https://i.ebayimg.com/00/s/NzY3WDEwMjQ=/z/6cIAAOSwGq5cPP8s/$_21.JPG',
      engine: 'Petrol',
      vehicleType: 'Cabriolet',
      location: 'Minsk',
      transmission: 'Automatic transmission',
    },
    {
      id: '8',
      makeId: 'Audi',
      model: 'A4',
      description: 'Nullam ultricies lorem oddfio, at laoreetsdfdsf tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta',
      price: 3550,
      image: 'https://i.ebayimg.com/00/s/NzUwWDEwMDA=/z/NeoAAOSwqKNcPLC~/$_21.JPG',
      engine: 'Petrol',
      vehicleType: 'Saloon',
      location: 'Minsk',
      transmission: 'Manual gearbox',
    },
    {
      id: '9',
      makeId: 'BMW',
      model: 'E92',
      description: 'elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 15800,
      image: 'https://i.ebayimg.com/00/s/MTExOVgxNjAw/z/-YIAAOSw9E5b6Zj6/$_21.JPG',
      engine: 'Petrol',
      vehicleType: 'Coupe',
      location: 'Minsk',
      transmission: 'Automatic transmission',
    },
    {
      id: '10',
      makeId: 'BMW',
      model: 'E46',
      description: 'consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. liquam euismod lacus non est egesta',
      price: 7764,
      image: 'https://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/-AUAAOSwJ7RcOLsr/$_21.JPG',
      engine: 'Petrol',
      vehicleType: 'Saloon',
      location: 'Minsk',
      transmission: 'Automatic transmission',
    },
    {
      id: '11',
      makeId: 'Mercede-Benz',
      model: 'CLK 320',
      description: 'at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 17674,
      image: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/wi8AAOSwpwBcOk75/$_21.JPG',
      engine: 'Petrol',
      vehicleType: 'Off-road Vehicle',
      location: 'Minsk',
      transmission: 'Automatic transmission',
    },
    {
      id: '12',
      makeId: 'Audi',
      model: 'A6',
      description: 'maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta. Nullam ultricies lorem odio, at laoreet tellus sodales in. Aliquam euismod lacus non est egesta',
      price: 32000,
      image: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/0Y4AAOSwO7dcPLfW/$_21.JPG',
      engine: 'Petrol',
      vehicleType: 'Saloon',
      location: 'Grodno',
      transmission: 'Automatic transmission',
    },
  ],
  uniqueId: '13',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CARS': {
      const newCar = {
        id: state.uniqueId,
        makeId: action.data.makeId,
        model: action.data.model,
        description: action.data.description,
        price: action.data.price,
        image: action.data.image,
        engine: action.data.engine,
        vehicleType: action.data.vehicleType,
        location: action.data.location,
        transmission: action.data.transmission,
      };
      return {
        ...state,
        cars: [...state.cars, newCar],
        uniqueId: state.uniqueId + 1,
      };
    }
    
    case 'DELETE_CARS': {
      return {
        ...state,
        cars: state.cars.filter(cars => cars.id !== action.id),
      };
    }

    case 'SORT_CARS': {
      return {
        ...state,
        // cars: state.news.filter(cars => cars.id !== action.id),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
