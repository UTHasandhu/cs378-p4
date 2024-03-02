import React, { useState } from 'react';
import './App.css';
import ComponentList from './componentList'; // Import the ComponentList
import logo from './logo.png';

function App() {
  const [activeComponent, setActiveComponent] = useState('raceResults'); // Default component

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand navbar-dark">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#logo" onClick={() => setActiveComponent('logo')}><img src={logo} className="App-logo" alt="logo" /></a>
            <a className="nav-item nav-link" href="#raceResults" onClick={() => setActiveComponent('raceResults')}>Race Results</a>
            <a className="nav-item nav-link" href="#qualifying" onClick={() => setActiveComponent('qualifying')}>Qualifying</a>
            <a className="nav-item nav-link" href="#driversChampionship" onClick={() => setActiveComponent('driversChampionship')}>Driver's Championship</a>
            <a className="nav-item nav-link" href="#teamsChampionship" onClick={() => setActiveComponent('teamsChampionship')}>Team's Championship</a>
            <a className="nav-item nav-link" href="#driverInformation" onClick={() => setActiveComponent('driverInformation')}>Driver Information</a>
            <a className="nav-item nav-link" href="#constructorInformation" onClick={() => setActiveComponent('constructorInformation')}>Constructor Information</a>
            <a className="nav-item nav-link" href="#circuitInformation" onClick={() => setActiveComponent('circuitInformation')}>Circuit Information</a>
            <a className="nav-item nav-link" href="#raceSchedule" onClick={() => setActiveComponent('raceSchedule')}>Race Schedule</a>
            <a className="nav-item nav-link" href="#seasonList" onClick={() => setActiveComponent('seasonList')}>Season List</a>
            <a className="nav-item nav-link" href="#finishingStatus" onClick={() => setActiveComponent('finishingStatus')}>Finishing Status</a>
            <a className="nav-item nav-link" href="#lapTimes" onClick={() => setActiveComponent('lapTimes')}>Lap Times</a>
            <a className="nav-item nav-link" href="#pitStops" onClick={() => setActiveComponent('pitStops')}>Pit Stops</a>
            <a className="nav-item nav-link" href="#about" onClick={() => setActiveComponent('about')}>About</a>
          </div>
        </nav>
      </header>
      <div className="main-content">
        <ComponentList activeComponent={activeComponent} />
      </div>
    </div>
  );
}

export default App;
