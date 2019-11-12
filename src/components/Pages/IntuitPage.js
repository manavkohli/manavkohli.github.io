import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'
import ChangingTextField from '../ChangingTextField/ChangingTextField'

export default class IntuitPage extends Component {
  render() {
    const languageModelContent = (
      <h1> Language Model </h1>
    )
    const vuiContent = (
      <h1> VUI </h1>
    )
    const adjectives = [
      " sleeping ",
      " hungry ",
      " quiet ",
      " ecstatic ",
      " frank "
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
        The brown fox jumps over the
          <ChangingTextField textValues={adjectives} offset={6000} color="#E1B07E"/>
          <ChangingTextField textValues={animals} offset={1500} color="#86A397"/>
        </div>
      </div>
    )
    const vuiSection = (
      <div>
        <HorizontalCard text={vuiContent} imageAlignment="right"/>
      </div>
    )

    const items = [
      languageModelSection,
      vuiSection
    ]

    return <ScrollingPage items={items} />
  }
}
