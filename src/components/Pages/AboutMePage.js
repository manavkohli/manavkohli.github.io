import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import headshot from '../../img/headshot_circle.png'
import fantastic_mr_fox from "../../img/gifs/fantastic_mr_fox.gif"
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
      <img alt="" src={fantastic_mr_fox} style={{cursor: "pointer"}} onClick={this.props.onClick} className="navigation-gif"/>
    ]
    return <ScrollingPage items={items} />
  }
}
