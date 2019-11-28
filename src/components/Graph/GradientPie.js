import React, {Component} from 'react';
import {Hint, RadialChart} from 'react-vis';

export default class GradientPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {name: ""},
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

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
    const plotWidth = 0.5 * this.state.width
    const plotHeight = 0.4 * this.state.height
    const radius = 0.6 * this.state.height
    const innerRadius = 0.02 * this.state.width

    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={innerRadius}
        radius={radius}
        getAngle={d => d.theta}
        data={[
          {theta: 3, name: "AWS Maintenance", className: 'custom-class'},
          {theta: 5, name: "ETL Monitoring", className: 'custom-class'},
          {theta: 2, name: "Testing", className: 'custom-class'},
          {theta: 1, name: "Airflow Optimization", className: 'custom-class'},
          {theta: 3, name: "Feature Engineering", className: 'custom-class'}
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: {"name": ""}})}
        width={plotWidth}
        height={plotHeight}
        padAngle={0.04}
      >
    {value.name !== "" &&
      <Hint value={value} align={{horizontal: Hint.ALIGN.RIGHT_EDGE, vertical: Hint.ALIGN.BOTTOM_EDGE}}>
        <div className="pie-text" > {value.name} </div>
      </Hint>

    }
      </RadialChart>
    );
  }
}
