import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'

export default class WritingPage extends Component {
  render() {
    const projectContent = (
      <div>
        <h1>Data Engineering and Machine Learning</h1>
        <h2>
          <a href="https://medium.thanx.com/advice-for-building-a-machine-learning-stack-at-startup-scale-b91eadaeef00">
            Advice for Deploying Your First Machine Learning Stack
          </a>
        </h2>
        <p>
          Most thought leadership on machine learning best practices is offered
          by the likes of Uber, Airbnb, Spotify, and other companies that deal
          with massive data throughputs. However, for smaller organizations that
          face greater constraints, hiring discrete infrastructure, data science,
          and machine learning engineering teams is intractible. This article
          provides insights into bootstrapping an MVP machine learning pipeline
          and how to choose between different infrastructure.
        </p>
        <h2>
          <a href="https://medium.thanx.com/how-to-process-data-with-terraform-and-lambda-d44b34922b86">
            How to Process Data with Terraform and Lambda
          </a>
        </h2>
        <p>
          After learning (and getting excited) about Terraform for offering
          version control for infrastructure changes, I wrote a short tutorial
          for implementing a serverless data migration tool deployed using the
          framework.
        </p>
      </div>
    )

    const roseContent = (
      <div>
        <h1>Public Policy</h1>
        <h2>
          <a href="http://roseinstitute.org/prison-realignment/">
            Prison Realignment in California
          </a>
        </h2>
        <p>
          Between 1980 and the early 2000s California's prison population growth
          far outpaced prison capacity increases. This resulted in extremely
          poor living conditions and the Supreme Court deciding in the 2011
          case <em>Brown v. Plata</em> that prisons populations fall to
          less than 137.5% of capacity. That burder was in turn felt at the
          county level, and the report analyzes the resulting impacts on local
          policies and economies.
        </p>

        <h2>
          <a href="http://roseinstitute.org/inland-empire-outlook-ontario-airport-comes-home/">
            Ontario Airport Comes Home
          </a>
        </h2>
        <p>
          The Ontario International Airport sits just at the Eastern edge of
          Los Angeles county, providing access to the densely populated Inland
          Empire. In late 2015 Los Angeles World airports agreed to relinquish
          ownership to local counties, causing the creation of a transition
          committee to consider how to best revive the airport. This report
          considers the history of the airport, its traffic, and the effects
          of transferring ownership on local economies.
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
