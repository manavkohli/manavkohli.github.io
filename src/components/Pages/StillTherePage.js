import React from 'react'
import royal_tenenbaums from "../../img/gifs/royal_tenenbaums.gif"

const StillTherePage = (props) => (
  <div>
    <div className="full-width">
      <img alt="" src={royal_tenenbaums} style={{cursor: "pointer"}} onClick={props.onClick} className="navigation-gif"/>
    </div>
    <p>Just checking you're still there</p>
  </div>
)

export default StillTherePage;
