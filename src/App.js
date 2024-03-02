import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  const [activeComponent, setActiveComponent] = useState('raceResults'); // Default component

  const renderComponent = () => {
    switch (activeComponent) {
      case 'logo':
        return <img src={logo} className="App-logo" alt="logo" />;
      case 'raceResults':
        return <div>Race Results Component</div>;
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


  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand navbar-dark">
          
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#raceResults" onClick={() => setActiveComponent('raceResults')}><img src={logo} className="App-logo" alt="logo" /></a>
            <a className="nav-item nav-link" href="#raceResults" onClick={() => setActiveComponent('raceResults')}>Race Results</a>
            <a className="nav-item nav-link" href="#qualifying" onClick={() => setActiveComponent('qualifying')}>Qualifying</a>
            <a className="nav-item nav-link" href="#driversChampionship" onClick={() => setActiveComponent('')}>Driver's Championship</a>
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
        {renderComponent()}
      </div>
    </div>
  );
}
export default App;
