import React, {Component} from 'react';
import './App.css';
import LandingScreenTextBox from './components/LandingScreenTextBox/LandingScreenTextBox'
import Menu from './components/Menu/Menu'
import running_snow from "./img/gifs/running_snow.gif"
import fantastic_mr_fox from "./img/gifs/fantastic_mr_fox.gif"
import royal_tenenbaums from "./img/gifs/royal_tenenbaums.gif"
import stick_roll_over from "./img/gifs/stick_roll_over.gif"
import headshot from './img/headshot_circle.png'
import HorizontalCard from './components/HorizontalCard/HorizontalCard'

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
    const introContent = (
      <div>
        <p>Hey, thanks for joining.</p>
        <p>Let's do it.</p>
      </div>
    )

    const architectureContent = (
      <h1>Architecture</h1>
    )
    const churnContent = (
      <h1>Churn Prediction</h1>
    )
    const anomalyDetectionContent = (
      <h1>Anomaly Detection</h1>
    )
    switch(this.state.currentPage) {
      case "home":
        return (
          <div>
            <div className="landing-screen">
              <div className="flex-two-thirds-column blue">
                <LandingScreenTextBox />
              </div>
            </div>
            <div className="flex-image-column-right-align">
              <img alt="" src={running_snow} style={{cursor: "pointer"}} onClick={this.navigateToAboutMe} />
            </div>
          </div>
        )
      case "still there":
        return (
          <div>
            <div className="full-width">
              <img alt="" src={royal_tenenbaums} style={{cursor: "pointer"}} onClick={this.navigateToThanx} className="navigation-gif"/>
            </div>
            <p>Sorry we can keep going</p>
          </div>
        )
      case "thanx":
      return (
        <div className="full-screen-page">
          <HorizontalCard image={headshot} text={architectureContent} imageAlignment="right"/>
          <HorizontalCard image={headshot} text={churnContent} imageAlignment="right"/>
          <HorizontalCard image={headshot} text={anomalyDetectionContent} imageAlignment="right"/>
          <div className="right-corner">
            <div className="flex-image-column-right-align">
              <img alt="" src={stick_roll_over} style={{cursor: "pointer"}} onClick={this.navigateToIntuit} className="navigation-gif"/>
            </div>
          </div>
        </div>
      )
      case "me":
        return (
          <div className="full-screen-page">
            <HorizontalCard image={headshot} imageAlignment="left" text={introContent} />
            <div className="right-corner">
              <div className="flex-image-column-right-align">
                <img alt="" src={fantastic_mr_fox} style={{cursor: "pointer"}} onClick={this.navigateToStillThere} className="navigation-gif"/>
              </div>
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
