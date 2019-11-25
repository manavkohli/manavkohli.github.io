import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'

export default class ProjectPage extends Component {
  render() {
    const projectContent = (
      <div>
        <h1>Independent Projects</h1>
        <h2> This Site </h2>
        <p>
          I designed and built this site using React. It's hosted by Github
          Pages and served by Node + Webpack. I've worked with React/JS in
          the past in building front-end components for Intuit that interfaced
          with the company's GraphQL APIs.
        </p>
        <h2> MNIST Quantum Classifier </h2>
        <p>
          I participated in the 2018 Rigetti Quantum Computing Hackathon and
          worked with a team to demonstrate the viability of training neural
          classifiers on quantum chips. We built a simple classifier for the
          MNIST data set that performed reservoir computing using qubit gates.
          The code for that project can be found
          <a href="https://github.com/manavkohli/quantum-mnist"> here</a>.
        </p>
      </div>
    )
    const classProjectsContent = (
      <div>
        <h1>Class Projects</h1>
        <h2> Toxic Language Detection </h2>
        <p>
          For the final project of Natural Language Processing with Deep
          Learning taught at Stanford University, my team built an
          attention-based recurrent model for detecting whether Wikipedia
          comments were offensive. We also implemented the GloVe algorithm to
          train word embeddings on our project domain. The code can be found
          <a href="https://github.com/manavkohli/cs224n-final-project"> here</a>.
        </p>
        <h2> DQN Agent </h2>
        <p>
          While enrolled in Principles of Artificial Intelligence at Stanford
          University I worked with two others to build an agent that learned to
          play the Atari game Riverraid. We implemented the popular Deep
          Q-Learning algorithm proposed by DeepMind for training a Go agent. We
          used OpenAI Gym and Keras to train our agent. The code is available
          <a href="https://github.com/manavkohli/cs221-project"> here</a>.
        </p>
      </div>
    )
    const classProjectSection = (
      <div>
        <HorizontalCard text={classProjectsContent} imageAlignment="right"/>
      </div>
    )

    const projectSection = (
      <div>
        <HorizontalCard text={projectContent} imageAlignment="right"/>
      </div>
    )

    return <ScrollingPage items={[projectSection, classProjectSection]} />
  }
}
