// CitySearch

import React, { useState } from 'react';

function CitySearch({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        style={{}}
      />
      <button  type="submit">Search</button>
    </form>
  );
}

export default CitySearch;
