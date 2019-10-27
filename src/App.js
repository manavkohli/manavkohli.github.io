import React from 'react';
import './App.css';
import LandingScreenTextBox from './components/LandingScreenTextBox/LandingScreenTextBox'

function App() {
  return (
    <div className="App">
      <div className="landing-screen">
        <div className="flex-half-column">
          <LandingScreenTextBox />
        </div>
      </div>
    </div>
  );
}

export default App;
