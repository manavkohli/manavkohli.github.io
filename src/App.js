import React, {Component} from 'react';
import './App.css';
import LandingScreenTextBox from './components/LandingScreenTextBox/LandingScreenTextBox'
import Menu from './components/Menu/Menu'
import running_snow from "./img/gifs/running_snow.gif"

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

  navigateToAboutMe = () => {
    this.setState({currentPage: "aboutMe"})
  }

  renderPage = () => {
    switch(this.state.currentPage) {
      case "home":
        return (
          <div>
            <div className="landing-screen">
              <div className="flex-two-thirds-column">
                <LandingScreenTextBox />
              </div>

            </div>
            <div className="one-third-right-column">
              <img alt="" src={running_snow} style={{cursor: "pointer"}} onClick={this.navigateToAboutMe}/>
            </div>
          </div>
        )
      default:
        return <div className="full-screen-page">yeet: {this.state.currentPage}</div>
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Menu onClick={this.updateCurrentPage} currentPage={this.state.currentPage}/>
        </div>
        {this.renderPage()}
      </div>
    )
  }
}

export default App;
