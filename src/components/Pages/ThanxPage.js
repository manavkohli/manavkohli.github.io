import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import headshot from '../../img/headshot_circle.png'
import stick_roll_over from '../../img/gifs/stick_roll_over.gif'
import ScrollingPage from './ScrollingPage'
export default class AboutMePage extends Component {
  render() {
    const architectureContent = (
      <h1>Architecture</h1>
    )
    const churnContent = (
      <h1>Churn Prediction</h1>
    )
    const anomalyDetectionContent = (
      <h1>Anomaly Detection</h1>
    )

    const items = [
      <HorizontalCard image={headshot} text={architectureContent} imageAlignment="right"/>,
      <HorizontalCard image={headshot} text={churnContent} imageAlignment="right"/>,
      <HorizontalCard image={headshot} text={anomalyDetectionContent} imageAlignment="right"/>,
      <img alt="" src={stick_roll_over} style={{cursor: "pointer"}} onClick={this.props.onClick} className="navigation-gif"/>
    ]

    return <ScrollingPage items={items} />
  }
}
