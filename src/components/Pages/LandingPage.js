import React from 'react'
import running_snow from '../../img/gifs/running_snow.gif'
import LandingScreenTextBox from '../LandingScreenTextBox/LandingScreenTextBox'
const LandingPage = (props) => (
  (
    <div>
      <div className="landing-screen">
        <div className="flex-two-thirds-column blue">
          <LandingScreenTextBox />
        </div>
      </div>
      <div className="flex-image-column-right-align">
        <img alt="" src={running_snow} style={{cursor: "pointer"}} onClick={props.onClick} />
      </div>
    </div>
  )
)

export default LandingPage;
