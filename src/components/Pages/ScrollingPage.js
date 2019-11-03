import React, {Fragment} from 'react'
import Fade from 'react-reveal/Fade'

const ScrollingPage = (props) => (
  <Fragment>
    {props.items.map((item, key) => (
      <div className="animated-horizontal-card" key={key}>
        <Fade top>
          {item}
        </Fade>
      </div>
    ))}
  </Fragment>
)

export default ScrollingPage;
