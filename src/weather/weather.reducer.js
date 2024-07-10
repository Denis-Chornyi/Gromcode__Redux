import { WEATHER_DATA } from './weather.actions';

const initialData = {
  weatherData: null
};

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA: {
      return {
        ...state,
        weatherData: action.payload.weatherData
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
