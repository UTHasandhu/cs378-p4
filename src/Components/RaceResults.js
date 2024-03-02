import React, { useState } from 'react';
import './RaceResults.css';
import RaceResultsTable from './RaceResultsTable';

const RaceResults = () => {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [category, setCategory] = useState('winners'); // Default to 'winners'
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false); // To control the display of results

  const handleCategoryChange = (value) => {
    setCategory(value);
    setInput(''); // Reset input field when category changes
    setShowResults(false); // Hide results when changing category
  };

  const fetchResults = async () => {
    setShowResults(false); // Reset results display
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
      setResults(data.MRData.RaceTable); // Storing the entire RaceTable
      setShowResults(true); // Show results after fetching
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults(null);
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

      {showResults && (
        <div className="main-content">
          {category === 'winners' ? (
            <pre className="results">{JSON.stringify(results, null, 2)}</pre> // Raw JSON for winners
          ) : (
            results && <RaceResultsTable races={results.Races} headerInfo={{ season: results.season, name: results.driverId || results.constructorId, type: category === 'drivers' ? 'Driver' : 'Constructor' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default RaceResults;