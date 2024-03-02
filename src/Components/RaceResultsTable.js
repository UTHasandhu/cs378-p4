import React from 'react';
import './RaceResultsTable.css';

const RaceResultsTable = ({ races, headerInfo }) => {
    // Determine the number of boxes based on the races length
    const boxes = [];
    for (let i = 0; i < races.length; i += 7) {
      boxes.push(races.slice(i, i + 7));
    }

    return (
      <div className="results-table">
        <div className="header-info">
          <strong>Season:</strong> {headerInfo.season} <strong>{headerInfo.type}:</strong> {headerInfo.name}
        </div>
        {boxes.map((box, index) => (
          <div key={index} className="race-box">
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
                  {headerInfo.type === 'constructors' && <th>Driver</th>}
                </tr>
              </thead>
              <tbody>
                {box.map((race, raceIndex) => (
                  <React.Fragment key={raceIndex}>
                    {race.Results.map((result, resultIndex) => (
                      <tr key={resultIndex} className={`position-${result.position}`}>
                        {resultIndex === 0 && <td rowSpan={race.Results.length}>{race.raceName}</td>}
                        {resultIndex === 0 && <td rowSpan={race.Results.length}>{race.date}</td>}
                        {resultIndex === 0 && <td rowSpan={race.Results.length}>{race.Circuit.circuitName}</td>}
                        <td>{result.position}</td>
                        <td>{result.points}</td>
                        <td>{result.grid}</td>
                        <td>{result.laps}</td>
                        <td>{result.status}</td>
                        {headerInfo.type === 'constructors' && <td>{result.Driver.givenName} {result.Driver.familyName}</td>}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
};

export default RaceResultsTable;
