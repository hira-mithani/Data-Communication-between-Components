// Current weather 
import React from 'react';

function CurrentWeather({ weather, unit }) {
  if (!weather) return null;
 
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind} {unit === 'metric' ? 'km/h' : 'mph'}</p>
    </div>
  );
}

export default CurrentWeather;
  
