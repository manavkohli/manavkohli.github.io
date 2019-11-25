import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'
import ChangingTextField from '../ChangingTextField/ChangingTextField'

export default class IntuitPage extends Component {
  render() {
    const languageModelContent = (
      <div>
        <h1> Language Modeling </h1>
        <p>
          I designed and built a language model for generating sentences with a
          particular sentiment. The model was trained on transcripts from care
          conversations between Intuit's agents and QuickBooks customers after
          being stripped of PII. Because language around business profits (or
          losses) can be difficult, the goal of the model was to generate more
          positive or neutral responses that our agents could use while speaking
          with customers about sensitive topics.
        </p>
      </div>
    )
    const gmailContent = (
      <div>
        <h1> Gmail Invoicing <br/> Add-On </h1>
        <p>
          I worked with a small team within Intuit to build a new invoicing
          product that integrated with Gmail. We partnered with Google for the
          launch of their Add-On product and helped the team iterate on early
          feature development. Our team completed alpha and beta testing of
          the integration and saw the product adoption grow to over 20,000
          users.
        </p>
      </div>

    )
    const adjectives = [
      " sleeping ",
      " hungry ",
      " quiet ",
      " ecstatic ",
      " frank ",
      " lazy "
    ]
    const animals = [
      " bear ",
      " ocelot ",
      " dog ",
      " giraffe "
    ]


    const languageModelSection = (
      <div>
        <HorizontalCard text={languageModelContent} imageAlignment="right"/>
        <div className="big-text">
        The quick brown fox jumps over the
          <ChangingTextField textValues={adjectives} offset={6000} color="#E1B07E"/>
          <ChangingTextField textValues={animals} offset={1500} color="#86A397"/>
        </div>
      </div>
    )
    const gmailSection = (
      <div>
        <HorizontalCard text={gmailContent} imageAlignment="right"/>
      </div>
    )

    const items = [
      languageModelSection,
      gmailSection
    ]

    return <ScrollingPage items={items} />
  }
}
