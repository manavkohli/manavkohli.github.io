import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import LandingPage from './components/Pages/LandingPage'
import ThanxPage from './components/Pages/ThanxPage'
import IntuitPage from './components/Pages/IntuitPage'
import AboutMePage from './components/Pages/AboutMePage'
import ProjectsPage from './components/Pages/ProjectsPage'
import WritingPage from './components/Pages/WritingPage'

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

  renderPage = () => {
    switch(this.state.currentPage) {
      case "home":
        return <LandingPage onClick={this.updateCurrentPage} />
      case "thanx":
      return (
        <div className="full-screen-page">
          <ThanxPage />
        </div>
      )
      case "intuit":
      return (
        <div className="full-screen-page">
          <IntuitPage />
        </div>
      )
      case "me":
        return <AboutMePage onClick={this.updateCurrentPage} />
      case "projects":
        return <ProjectsPage />
      case "writing":
        return <WritingPage />
      default:
        return <div className="full-screen-page">Page: {this.state.currentPage}</div>
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.currentPage !== "home" && <div className="app-header">
            <Menu onClick={this.updateCurrentPage} currentPage={this.state.currentPage}/>
          </div>
        }
        {
          this.renderPage()
        }
      </div>
    )
  }
}

export default App;
