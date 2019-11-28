import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'

export default class ProjectPage extends Component {
  render() {
    const projectContent = (
      <div>
        <h1>Independent Projects</h1>
        <h2>
          <a href="https://github.com/manavkohli/manavkohli.github.io">
            This Site
          </a>
        </h2>
        <p>
          I designed and built this site using React. It's hosted by Github
          Pages and served by Node and Webpack. It was bootsrapped with
          create-react-app.
        </p>
        <h2>
          <a href="https://github.com/manavkohli/quantum-mnist">
            MNIST Quantum Classifier
          </a>
        </h2>
        <p>
          I participated in the 2018 Rigetti Quantum Computing Hackathon and
          worked with a team to demonstrate the viability of training neural
          classifiers on quantum chips. We built a simple classifier for the
          MNIST data set that performed reservoir computing using qubit gates.
        </p>
      </div>
    )
    const classProjectsContent = (
      <div>
        <h1>Class Projects</h1>
        <h2>
            <a href="https://github.com/manavkohli/cs224n-final-project">
              Toxic Language Detection
            </a>
        </h2>
        <p>
          For the final project of Natural Language Processing with Deep
          Learning (CS224n) taught at Stanford University, my team built an
          attention-based recurrent model for detecting whether Wikipedia
          comments were offensive. We also implemented the GloVe algorithm to
          train word embeddings on our project domain.
        </p>
        <h2>
          <a href="https://github.com/manavkohli/cs221-project">
            DQN Agent
          </a>
        </h2>
        <p>
          While enrolled in Principles of Artificial Intelligence at Stanford
          University (CS221) I worked with two others to build an agent that
          learned to play the Atari game Riverraid. We implemented the popular Deep
          Q-Learning algorithm proposed by DeepMind for training a Go agent. We
          used OpenAI Gym and Keras to train our agent.
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
