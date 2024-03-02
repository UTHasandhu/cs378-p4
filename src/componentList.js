import React from 'react';
import logo from './logo.png';
/* All Components */
import RaceResults from './Components/RaceResults';

const ComponentList = ({ activeComponent }) => {
  switch (activeComponent) {
    case 'logo':
      return <img src={logo} className="App-logo" alt="logo" />;
    case 'raceResults':
      return <RaceResults />;
    case 'qualifying':
      return <div>Qualifying Component</div>;
    case 'driversChampionship':
      return <div>Driver's Championship Component</div>;
    case 'teamsChampionship':
      return <div>Team's Championship Component</div>;
    case 'driverInformation':
      return <div>Driver Information Component</div>;
    case 'constructorInformation':
      return <div>Constructor Information Component</div>;
    case 'circuitInformation':
      return <div>Circuit Information Component</div>;
    case 'raceSchedule':
      return <div>Race Schedule Component</div>;
    case 'seasonList':
      return <div>Season List Component</div>;
    case 'finishingStatus':
      return <div>Finishing Status Component</div>;
    case 'lapTimes':
      return <div>Lap Times Component</div>;
    case 'pitStops':
      return <div>Pit Stops Component</div>;
    case 'about':
      return <div>About</div>;
    default:
      return <div>Race Results Component</div>;
  }
};

export default ComponentList;
