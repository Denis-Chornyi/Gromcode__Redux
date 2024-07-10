import { getWeatherData } from './weather.gateway';

export const WEATHER_DATA = 'WEATHER_DATA';

export const weatherDataReceived = weatherData => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherData
    }
  };
};

export const fetchUserData = () => {
  return async function (dispatch) {
    const weatherData = await getWeatherData();
    dispatch(weatherDataReceived(weatherData));
  };
};
