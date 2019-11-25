import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'

export default class WritingPage extends Component {
  render() {
    const projectContent = (
      <div>
        <h1>Data Engineering and Machine Learning</h1>
        <h2>How to Process Data with Terraform and Lambda </h2>
        <h4><a href="https://medium.thanx.com/how-to-process-data-with-terraform-and-lambda-d44b34922b86">
          Link
          </a></h4>
        <p>
          Lorem Ipsum
        </p>
        <h2>Advice for Deploying Your First Machine Learning Stack</h2>
        <h4><a href="https://medium.thanx.com/advice-for-building-a-machine-learning-stack-at-startup-scale-b91eadaeef00">
          Link
          </a></h4>
        <p>
          Lorem Ipsum
        </p>


      </div>
    )
    const roseContent = (
      <div>
        <h1>Public Policy</h1>
        <h2>Prison Realignment in California</h2>
        <h4><a href="http://roseinstitute.org/prison-realignment/">
          Link
          </a></h4>
        <p>
          Lorem Ipsum
        </p>
        <h2>Ontario Airport Comes Home</h2>
        <h4><a href="http://roseinstitute.org/inland-empire-outlook-ontario-airport-comes-home/">
          Link
          </a></h4>
        <p>
          Lorem Ipsum
        </p>
      </div>
    )

    const projectSection = (
      <div>
        <HorizontalCard text={projectContent} imageAlignment="right"/>
      </div>
    )
    const roseSection = (
      <div>
        <HorizontalCard text={roseContent} imageAlignment="right"/>
      </div>
    )


    return <ScrollingPage items={[projectSection, roseSection]} />
  }
}
