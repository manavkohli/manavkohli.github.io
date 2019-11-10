import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  Hint
} from 'react-vis';

export default class ScatterPlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  _forgetValue = () => {
    this.setState({
      value: null
    });
  };

  _rememberValue = value => {
    this.setState({x: "test", y: "test"});
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const {value} = this.state;
    const plotWidth = 0.6 * this.state.width
    const plotHeight = 0.4 * this.state.height
    return (
      <XYPlot width={plotWidth} height={plotHeight} className="scatter-plot">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries data={this.props.data} />
        <MarkSeries color="red" data={this.props.anomalousData} />
        {value ? <Hint value={value} /> : null}
      </XYPlot>
    );
  }
}
