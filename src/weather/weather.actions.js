import { getWeatherData } from './weather.gateway';

export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

export const weatherDataReceived = weatherData => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData
    }
  };
};

export const fetchWeatherData = () => {
  return function (dispatch) {
    return getWeatherData().then(weatherData => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
};
