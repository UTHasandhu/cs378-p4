import React, { useState } from 'react';
import './RaceResults.css';

const RaceResults = () => {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [category, setCategory] = useState('winners'); // Default to 'winners'
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const handleCategoryChange = (value) => {
    setCategory(value);
    setInput(''); // Reset input field when category changes
  };

  const fetchResults = async () => {
    let url = `http://ergast.com/api/f1/${year}`;
    if (category === 'drivers') {
      url += `/drivers/${input}/results.json`;
    } else if (category === 'constructors') {
      url += `/constructors/${input}/results.json`;
    } else {
      url += `/results/1.json`; // Winners of the season
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(JSON.stringify(data, null, 2)); // Displaying raw JSON for now
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults('Error fetching data');
    }
  };

  return (
    <div className="race-results">
      <select className="year-select" value={year} onChange={e => setYear(e.target.value)}>
        {Array.from({ length: new Date().getFullYear() - 1950 }, (_, i) => 1950 + i).map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('drivers')}>Driver</button>
        <button onClick={() => handleCategoryChange('constructors')}>Constructor</button>
        <button onClick={() => handleCategoryChange('winners')}>Winner</button>
      </div>

      {(category === 'drivers' || category === 'constructors') && (
        <div>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`Enter a ${category.slice(0, -1)}`}
          />
          <div>Enter a {category.slice(0, -1)}:</div>
        </div>
      )}

      <button onClick={fetchResults}>Go</button>

      <pre className="results">{results}</pre>
    </div>
  );
};

export default RaceResults;
