import { fetchWeatherData } from './weather.gateway';

export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

export const weatherDataReceived = weatherData => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData
    }
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    return fetchWeatherData().then(weatherData => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
};
