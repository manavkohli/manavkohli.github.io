import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import headshot from '../../img/headshot_circle.png'
import ScrollingPage from './ScrollingPage'
import Emoji from '../Emoji/Emoji'

export default class AboutMePage extends Component {
  navigateToThanx = () => {
    this.props.onClick("thanx")
  }

  navigateToIntuit = () => {
    this.props.onClick("intuit")
  }

  render() {
    const introContent = (
      <div className="intro-content">
        <p>
          I grew up in Portland, OR <Emoji symbol={"🌲"} /> and have lived in
          San Francisco, CA <Emoji symbol={"☁️"} /> for the past couple years.
          Between the two I spent some time living on a community
          farm in central Brazil <Emoji symbol={"🌾"} />, lived in
          Ulaanbaataar, Mongolia <Emoji symbol={"🐎"} /> for a summer,
          and received a B.A. in Computer Science from Claremont McKenna College <Emoji symbol={"🎓"} />.
          Recent adventures took me through Moroccan
          Medinas <Emoji symbol={"🍵"} /> and on walks in the Italian alps
          <Emoji symbol={"🏔"} />.
        </p>
        <p>
          When grounded, I enjoy playing tennis <Emoji symbol={"🎾"} />,
          snowboarding  <Emoji symbol={"🏂"} />, biking <Emoji symbol={"🚴🏽‍♂️"} />,
          cooking  <Emoji symbol={"🍳"} />, and reading <Emoji symbol={"📚"} />.
          Some of my recent favorite reads include Cherry, by Nico Walker and
          2018 Best American Short Stories, curated by Roxanne Gay. My favorite
          movie is the Royal Tenenbaums.
        </p>
        <p>
          I currently build machine learning solutions for
          <span onClick={this.navigateToThanx} className="about-me-link">
            <Emoji symbol={" 👉🏽"} /> Thanx
          </span>,
          a marketing technology company. I previously worked as a software
          engineer on the Payments team at
          <span onClick={this.navigateToIntuit} className="about-me-link">
            <Emoji symbol={" 👉🏽"} /> Intuit
          </span>.
        </p>
      </div>
    )
    const items = [
      <HorizontalCard image={headshot} imageAlignment="left" text={introContent} />
    ]
    return <ScrollingPage items={items} />
  }
}
