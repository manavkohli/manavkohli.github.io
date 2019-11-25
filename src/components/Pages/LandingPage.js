import React from 'react'
import LandingScreenTextBox from '../LandingScreenTextBox/LandingScreenTextBox'
import LargeList from '../LargeList/LargeList'

const LandingPage = (props) => (
  (
    <div>
      <div className="landing-screen">
        <div className="flex-two-thirds-column">
          <LandingScreenTextBox />
        </div>
      </div>
      <LargeList
        onClick={props.onClick}
        items={
          [
            {'label': 'me', 'year': 'Nov 1993-now'},
            {'label': 'thanx', 'year': 'Dec 2018-now'},
            {'label': 'intuit', 'year': 'Sep 2016-Dec 2018'},
            {'label': 'projects', 'year': '~'},
            {'label': 'writing', 'year': 'Jan 2019-now'},
          ]
        }
      />
    </div>
  )
)

export default LandingPage;
