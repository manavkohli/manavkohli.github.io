import React from 'react'

const HorizontalCard = props => (
    <div> {
      props.imageAlignment === "left" && <div className="horizontal-card">
        <div className="flex-one-third-column">
          <img alt="" src={props.image} className="horizontal-card-image"/>
        </div>
        <div className="flex-two-thirds-column left-aligned-text border-left">
          {props.text}
        </div>
      </div>
    }
    {
      props.imageAlignment === "right" && <div className="horizontal-card">
        <div className="flex-two-thirds-column left-aligned-text border-left">
          {props.text}
        </div>
        <div className="flex-one-third-column left-aligned">
          <img alt="" src={props.image} className="horizontal-card-image"/>
        </div>
      </div>
    }
    </div>
);

export default HorizontalCard;
