import { getWeatherData } from './weather.gatawey';

export const WEATHER_DATA = ' WEATHER_DATA';

export const weatherDataRecieved = weatherData => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData
    }
  };
};

export const fetchUserData = city => {
  return function (dispatch) {
    getWeatherData(city).then(weatherData => {
      dispatch(weatherDataRecieved(weatherData));
    });
  };
};
