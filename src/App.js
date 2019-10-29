import React, {Component} from 'react';
import './App.css';
import LandingScreenTextBox from './components/LandingScreenTextBox/LandingScreenTextBox'
import Menu from './components/Menu/Menu'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
  }

  updateCurrentPage = (newPage) => {
    this.setState({currentPage: newPage})
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Menu onClick={this.updateCurrentPage} currentPage={this.state.currentPage}/>
        </div>
        <div className="landing-screen">
          <div className="flex-two-thirds-column">
            <LandingScreenTextBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
