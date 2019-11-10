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

  render() {
    const data = []
    for(let i = 0; i < 60; i++) {
      data.push({
        x: this.getNonAnomalousNumber(),
        y: this.getNonAnomalousNumber()
      })
    }

    const anomalousData = [
      {x: 9, y: 9},
      {x: 9.3, y: 9.1},
      {x: 9.9, y: 9},
      {x: 9, y: 9.8}
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
          <ScatterPlot data={data} anomalousData={anomalousData}/>
        </div>
      </div>
    )

    const items = [
      anomalyDetectionSection,
      <HorizontalCard image={headshot} text={churnContent} imageAlignment="right"/>,
      <HorizontalCard image={headshot} text={architectureContent} imageAlignment="right"/>,
      <img alt="" src={stick_roll_over} style={{cursor: "pointer"}} onClick={this.props.onClick} className="navigation-gif"/>
    ]

    return <ScrollingPage items={items} />
  }
}
