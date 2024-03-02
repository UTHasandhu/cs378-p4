import React from 'react';
import './WinnerResultsTable.css';

const WinnerResultsTable = ({ races, headerInfo }) => {
  return (
    <div className="race-results-table">
      <h2>{headerInfo.season} {headerInfo.name} {headerInfo.type}</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Race Name</th>
            <th>Date</th>
            <th>Circuit</th>
            <th>Location</th>
            <th>Winner</th>
            <th>Constructor</th>
            <th>Laps</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race, index) => (
            <tr key={index}>
              <td>{race.round}</td>
              <td>{race.raceName}</td>
              <td>{race.date}</td>
              <td>{race.Circuit.circuitName}</td>
              <td>{`${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`}</td>
              <td>{`${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`}</td>
              <td>{race.Results[0].Constructor.name}</td>
              <td>{race.Results[0].laps}</td>
              <td>{race.Results[0].Time.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WinnerResultsTable;
