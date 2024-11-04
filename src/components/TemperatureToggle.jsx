//  Temp toggle 

import React from 'react';

function TemperatureToggle({ unit, onToggle }) {
  return (
    <div className='d-flex justify-content-center mt-4'>
      <button onClick={() => onToggle(unit === 'C' ? 'F' : 'C')}>
        Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
}

export default TemperatureToggle;
