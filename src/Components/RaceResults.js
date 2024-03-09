import React, { useState } from 'react';
import './RaceResults.css';
import RaceResultsTable from './RaceResultsTable';
import WinnerResultsTable from './WinnerResultsTable'; // Import the new component

const RaceResults = () => {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [category, setCategory] = useState('winners');
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);



  const handleCategoryChange = (value) => {
    setCategory(value);
    setInput('');
    setShowResults(false);
  };

  const fetchResults = async () => {
    setShowResults(false);
    let url = `http://ergast.com/api/f1/${year}`;
    if (category === 'drivers') {
      url += `/drivers/${input}/results.json`;
    } else if (category === 'constructors') {
      url += `/constructors/${input}/results.json`;
    } else {
      url += `/results/1.json`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.MRData.RaceTable.Races.length === 0) {
        // No results found, likely invalid input
        if (category === 'drivers') {
          alert(`Driver "${input}" not found in year ${year}. Please check the driver's name and try again.`);
        } else if (category === 'constructors') {
          alert(`Constructor "${input}" not found in year ${year}. Please check the constructor's name and try again.`);
        }
        setResults(null);
      } else {
        setResults(data.MRData.RaceTable);
        setShowResults(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults(null);
    }
  };

  return (
    <div className="race-results">
      <div className={`controls-bar`}>
      <select className={`year-select`} value={year} onChange={e => setYear(e.target.value)}>
          {Array.from({ length: new Date().getFullYear() - 1950 }, (_, i) => 1950 + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <div className={`category-buttons`}>
          <button onClick={() => handleCategoryChange('drivers')}>Driver</button>
          <button onClick={() => handleCategoryChange('constructors')}>Constructor</button>
          <button onClick={() => handleCategoryChange('winners')}>Winner</button>
        </div>

        {(category === 'drivers' || category === 'constructors') && (
          <div className={`input-wrapper`}>
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
      </div>

      {showResults && (
        <div className="main-content">
            {category === 'winners' ? (
            <WinnerResultsTable races={results.Races} headerInfo={results.headerInfo || {}} /> 
            ) : (
            results && category !== 'winners' && <RaceResultsTable races={results.Races} headerInfo={{ season: results.season, name: results.driverId || results.constructorId, type: category }} />
            )}
        </div>
        )}

    </div>
  );
};

export default RaceResults;
