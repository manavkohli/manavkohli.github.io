import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'

export default class ProjectPage extends Component {
  render() {
    const projectContent = (
      <div>
        <h1> This Site </h1>
        <p>
          Lorem Ipsum
        </p>
        <h1> Toxic Language Detection </h1>
        <p>
          Lorem Ipsum
        </p>
        <h1> DQN Agent </h1>
        <p>
          Lorem Ipsum
        </p>
        <h1> MNIST Quantum Classifier </h1>
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

    return <ScrollingPage items={[projectSection]} />
  }
}
