import React, {Component} from 'react'

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
    };
  }

  onClick = () => {
    this.props.onClick(this.props.label)
  }

  highlightText = () => {
    this.setState({color: "#39ff14"})
  }

  unhighlightText = () => {
    this.setState({color: "white"})
  }

  render() {
    return (
      <span
        style={{color: this.state.color}}
        onClick={this.onClick}
        onMouseEnter={this.highlightText}
        onMouseLeave={this.unhighlightText}
      > {this.props.label} </span>
    )
  }
}
