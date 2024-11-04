// Forecast 

import React from 'react';

function WeatherForecast({ forecast, unit }) {
  const convertTemp = (temp) => (unit === 'C' ? temp : (temp * 1.8 + 32).toFixed(2));

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {forecast.map((temp, index) => (
          <li key={index}>Day {index + 1}: {convertTemp(temp)}°{unit}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherForecast;
  
