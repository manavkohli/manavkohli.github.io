import React from 'react'

const HorizontalCard = props => (
  <div className="horizontal-card">
    <div className="flex-one-third-column">
      <img src={props.image} className="horizontal-card-image"/>
    </div>
    <div className="flex-two-thirds-column left-aligned-text">
      {props.text}
    </div>
  </div>
);

export default HorizontalCard;
