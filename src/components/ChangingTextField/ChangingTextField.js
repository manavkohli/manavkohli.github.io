import React, {Component} from 'react';

class ChangingTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueIdx: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ valueIdx: this.state.valueIdx + 1}),
      800
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span className="changing-text-field">
        {this.props.textValues[this.state.valueIdx % this.props.textValues.length]}
      </span>
    )
  }
}

export default ChangingTextField;
