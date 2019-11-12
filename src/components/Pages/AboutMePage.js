import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import headshot from '../../img/headshot_circle.png'
import ScrollingPage from './ScrollingPage'

export default class AboutMePage extends Component {
  render() {
    const introContent = (
      <div>
        <p>Hey, thanks for joining.</p>
        <p>Let's do it.</p>
      </div>
    )
    const items = [
      <HorizontalCard image={headshot} imageAlignment="left" text={introContent} />,
    ]
    return <ScrollingPage items={items} />
  }
}
