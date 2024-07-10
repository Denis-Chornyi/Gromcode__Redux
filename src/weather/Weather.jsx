import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selector';
import { fetchUserData } from './weather.actions';

const Weather = ({ weatherData, fetchUserData }) => {
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(city => (
          <li className="city" key={city.name}>
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state)
  };
};

const mapDispatch = {
  fetchUserData
};

export default connect(mapState, mapDispatch)(Weather);
