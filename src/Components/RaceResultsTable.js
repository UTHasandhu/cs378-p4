import React from 'react';
import './RaceResultsTable.css';

const RaceResultsTable = ({ races, headerInfo }) => {
  return (
    <div className="results-table">
      <div className="header-info">
        <strong>Season:</strong> {headerInfo.season} <strong>{headerInfo.type}:</strong> {headerInfo.name}
      </div>
      {races.map((race, index) => (
        <div key={index} className={`race-box ${index % 7 === 0 ? 'new-box' : ''}`}>
          <table>
            <thead>
              <tr>
                <th>Race Name</th>
                <th>Date</th>
                <th>Circuit</th>
                <th>Position</th>
                <th>Points</th>
                <th>Grid</th>
                <th>Laps</th>
                <th>Status</th>
                {race.Results.length > 1 && <th>Driver</th>} {/* Extra header for constructor results */}
              </tr>
            </thead>
            <tbody>
              {race.Results.map((result, resIndex) => (
                <tr key={resIndex}>
                  {resIndex === 0 && <td rowSpan={race.Results.length}>{race.raceName}</td>}
                  {resIndex === 0 && <td rowSpan={race.Results.length}>{race.date}</td>}
                  {resIndex === 0 && <td rowSpan={race.Results.length}>{race.Circuit.circuitName}</td>}
                  <td>{result.position}</td>
                  <td>{result.points}</td>
                  <td>{result.grid}</td>
                  <td>{result.laps}</td>
                  <td>{result.status}</td>
                  {race.Results.length > 1 && <td>{result.Driver.givenName} {result.Driver.familyName}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default RaceResultsTable;
