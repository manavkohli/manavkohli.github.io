import React from 'react';
import {Hint, RadialChart} from 'react-vis';

export default class GradientPie extends React.Component {
  state = {
    value: {name: ""}
  };
  render() {
    const {value} = this.state;
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={100}
        radius={140}
        getAngle={d => d.theta}
        data={[
          {theta: 2, name: "foo", className: 'custom-class'},
          {theta: 6, name: "foo"},
          {theta: 2, name: "foo"},
          {theta: 3, name: "foo"},
          {theta: 1, name: "foo"}
        ]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: {"name": ""}})}
        width={300}
        height={300}
        padAngle={0.04}
      >
        {value.name !== "" && <Hint value={{"name": value.name}} />}
      </RadialChart>
    );
  }
}
