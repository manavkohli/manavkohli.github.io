import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'
import ScatterPlot from '../Graph/ScatterPlot'
import GradientPie from '../Graph/GradientPie'

export default class ThanxPage extends Component {
  getNonAnomalousNumber = () => {
    const x = Math.random() * 10
    return x > 8.9 ? x - Math.random() * 10 : x
  }

  getChurnNonAnomalousNumber = () => {
    let x = Math.random() * 10
    if (x > 3.5 && x < 4.5) {
      x -= 2.5
    }
    return x
  }

  render() {
    const anomalyDetectionData = []
    const churnDetectionData = []
    for(let i = 0; i < 200; i++) {
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
      <div>
        <h1>Architecture</h1>
        <p>
          I architected and implemented Thanx's machine learning platform using
          Airflow. I created online/offline feature engineering pipelines, built
          out and maintain all the infrastructure to support our models, and
          actively develop on it. I also integrated the pipelines with our
          production data lake to integrate predictions into product features.
        </p>
      </div>
    )
    const churnContent = (
      <div>
          <h1>Churn Prediction</h1>
            <p>
              When customers visit Thanx merchants they earn rewards.
              Unfortunately, sometimes those customers either decide to take
              their business elsewhere or move. I built a model that detects
              when high-value customers churn and identifies those at risk in
              order to enable the merchant to automagically win back those
              errant individuals. The models retrain and evaluate themselves on
              a monthly basis to guarantee that they continue to capture
              current purchase habits.
            </p>
      </div>
    )
    const anomalyDetectionContent = (
      <div>
          <h1>Anomaly Detection</h1>
            <p>
              Thanx delivers rewards to customers based on their spending at
              merchants whose loyalty programs they are a part of. However,
              sometimes we don't see enough transactions enter our system, too
              many, or simply the wrong ones. I designed, trained, and deployed
              an ML based anomaly detection system for flagging these events.
            </p>
      </div>
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
    const architectureSection = (
      <div>
        <HorizontalCard text={architectureContent} imageAlignment="right"/>
        <div className="scatter-plot-section">
          <GradientPie />
        </div>
      </div>
    )

    const items = [
      anomalyDetectionSection,
      churnSection,
      architectureSection
    ]

    return <ScrollingPage items={items} />
  }
}
