import React, {Component} from 'react';
import ChangingTextField from '../ChangingTextField/ChangingTextField'
import Emoji from '../Emoji/Emoji'

class LandingScreenTextBox extends Component {

  render() {
    const emojis = [
      <Emoji symbol="👨‍💻" label="code"/>,
      <Emoji symbol="🍳" label="cook"/>,
      <Emoji symbol="🎾" label="tennis"/>,
      <Emoji symbol="🏂" label="snowboard"/>,
      <Emoji symbol="🚴🏽‍" label="bike"/>,
      <Emoji symbol="🏝" label="vacation"/>,
      <Emoji symbol="🏃🏽‍" label="run"/>,
      <Emoji symbol="🎸" label="guitar"/>,
      <Emoji symbol="🎉" label="party"/>,
    ]

    return <div className="landing-screen-text-box">
      Hi, my name is Manav Kohli. I live in San Francisco and sometimes I like
      to <ChangingTextField textValues={emojis}/>
    </div>
  }
}

export default LandingScreenTextBox;
