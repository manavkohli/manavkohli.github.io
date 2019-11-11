import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import headshot from '../../img/headshot_circle.png'
import stick_roll_over from '../../img/gifs/stick_roll_over.gif'
import ScrollingPage from './ScrollingPage'
import ScatterPlot from '../Graph/ScatterPlot'

export default class ThanxPage extends Component {
  getNonAnomalousNumber = () => {
    const x = Math.random() * 10
    return x > 7 ? x - 3 : x
  }

  getChurnNonAnomalousNumber = () => {
    let x = Math.random() * 10
    if (x > 3 && x < 5) {
      x -= 2.5
    }
    return x
  }

  render() {
    const anomalyDetectionData = []
    const churnDetectionData = []
    for(let i = 0; i < 60; i++) {
      anomalyDetectionData.push({
        x: this.getNonAnomalousNumber(),
        y: this.getNonAnomalousNumber()
      })

      churnDetectionData.push({
        x: this.getChurnNonAnomalousNumber(),
        y: this.getChurnNonAnomalousNumber()
      })
    }

    const anomalyDetectionAnomalousData = [
      {x: 9, y: 9},
      {x: 9.3, y: 9.1},
      {x: 9.9, y: 9},
      {x: 9, y: 9.8}
    ]

    const churnAnomalousData = [
      {x: 4, y: 4},
      {x: 4.3, y: 4.1},
      {x: 4.4, y: 4},
      {x: 3.7, y: 4.8}
    ]

    const architectureContent = (
      <h1>Architecture</h1>
    )
    const churnContent = (
      <h1>Churn Prediction</h1>
    )
    const anomalyDetectionContent = (
      <h1>Anomaly Detection</h1>
    )
    const anomalyDetectionSection = (
      <div>
        <HorizontalCard text={anomalyDetectionContent} imageAlignment="right"/>
        <div className="scatter-plot-section">
          <ScatterPlot
            data={anomalyDetectionData}
            anomalousData={anomalyDetectionAnomalousData}
          />
        </div>
      </div>
    )
    const churnSection = (
      <div>
        <HorizontalCard text={churnContent} imageAlignment="right"/>
        <div className="scatter-plot-section">
          <ScatterPlot data={churnDetectionData} anomalousData={churnAnomalousData}/>
        </div>
      </div>
    )

    const items = [
      anomalyDetectionSection,
      churnSection,
      <HorizontalCard image={headshot} text={architectureContent} imageAlignment="right"/>,
      <img alt="" src={stick_roll_over} style={{cursor: "pointer"}} onClick={this.props.onClick} className="navigation-gif"/>
    ]

    return <ScrollingPage items={items} />
  }
}
