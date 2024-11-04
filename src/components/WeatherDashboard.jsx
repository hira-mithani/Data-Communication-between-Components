// Dashboard

import React, { useState } from 'react';
import CitySearch from './CitySearch';
import TemperatureToggle from './TemperatureToggle';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('C');

  // Updated city names in weatherData
  const weatherData = {
    Lahore: { current: { temp: 30, humidity: 60, wind: 10 }, forecast: [32, 31, 30, 29, 28] },
    Multan: { current: { temp: 34, humidity: 50, wind: 12 }, forecast: [33, 32, 31, 30, 29] },
    Quetta: { current: { temp: 35, humidity: 55, wind: 14 }, forecast: [36, 35, 34, 33, 32] },
    Islamabad: { current: { temp: 31, humidity: 52, wind: 11 }, forecast: [30, 29, 28, 27, 26] },
    Rawalpindi: { current: { temp: 29, humidity: 65, wind: 15 }, forecast: [30, 29, 28, 27, 26] }
  };

  const currentWeather = city && weatherData[city] ? weatherData[city].current : null;
  const forecast = city && weatherData[city] ? weatherData[city].forecast : null;

  const handleCitySearch = (newCity) => {
    setCity(newCity);
  };

  const handleToggleUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom right, #89CFF0, #E0FFFF)',
        padding: '20px',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Weather Dashboard</h1>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          width: '500px',
          textAlign: 'center'
        }}
      >
        <CitySearch onSearch={handleCitySearch} />
        <TemperatureToggle unit={unit} onToggle={handleToggleUnit} />
        {currentWeather && <CurrentWeather weather={currentWeather} unit={unit} />}
        {forecast && <WeatherForecast forecast={forecast} unit={unit} />}
      </div>
    </div>
  );
}

export default WeatherDashboard;
