import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import LandingPage from './components/Pages/LandingPage'
import ThanxPage from './components/Pages/ThanxPage'
import AboutMePage from './components/Pages/AboutMePage'
import StillTherePage from './components/Pages/StillTherePage'

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
    this.setState({currentPage: "me"})
  }

  navigateToThanx = () => {
    this.setState({currentPage: "thanx"})
  }

  navigateToStillThere = () => {
    this.setState({currentPage: "still there"})
  }

  navigateToIntuit = () => {
    this.setState({currentPage: "intuit"})
  }

  renderPage = () => {
    switch(this.state.currentPage) {
      case "home":
        return <LandingPage onClick={this.navigateToAboutMe} />
      case "still there":
        return <StillTherePage onClick={this.navigateToThanx} />
      case "thanx":
      return (
        <div className="full-screen-page">
          <ThanxPage onClick={this.navigateToIntuit} />
        </div>
      )
      case "me":
        return <AboutMePage onClick={this.navigateToStillThere} />
      default:
        return <div className="full-screen-page">Page: {this.state.currentPage}</div>
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
