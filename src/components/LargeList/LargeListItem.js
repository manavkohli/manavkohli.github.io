import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'

export default class LargeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
    };
  }

  onClick = () => {
    this.props.onClick(this.props.content)
  }

  highlightText = () => {
    this.setState({color: "#4fa35c"})
  }

  unhighlightText = () => {
    this.setState({color: "white"})
  }

  render() {
    return (
      <Fade bottom>
        {
          <div className="large-list-item">
            <span
              style={{color: this.state.color, cursor: "pointer"}}
              onClick={this.onClick}
              onMouseEnter={this.highlightText}
              onMouseLeave={this.unhighlightText}
            >
              {this.props.content }
            </span>
            <span className="small-text"> {this.props.smallText} </span>
          </div>
        }
      </Fade>
    )
  }
}
