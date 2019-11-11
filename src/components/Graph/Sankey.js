import React from 'react';

import {Sankey} from 'react-vis';

const BLURRED_LINK_OPACITY = 0.3;
const FOCUSED_LINK_OPACITY = 0.6;

export default class SankeyGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      width: 0,
      height: 0,
      activeLink: null
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
    const {activeLink} = this.state;
    const plotWidth = 0.6 * this.state.width
    const plotHeight = 0.4 * this.state.height

    // Note: d3.sankey currently mutates the `nodes` and `links` arrays, which doesn't play nice
    // with React's single-direction data flow. We create a copy of each before we pass to the sankey
    // component, just to be sure.
    return (
      <div>
        <div>
          {`${
            activeLink
              ? `${this.props.nodes[activeLink.source.index].name} -> ${
                  this.props.nodes[activeLink.target.index].name
                }`
              : 'None'
          } selected`}
        </div>
        <Sankey
          nodes={this.props.nodes.map(d => ({...d}))}
          links={this.props.links.map((d, i) => ({
            ...d,
            opacity:
              activeLink && i === activeLink.index
                ? FOCUSED_LINK_OPACITY
                : BLURRED_LINK_OPACITY
          }))}
          width={plotWidth}
          height={plotHeight}
          margin={50}
          layout={24}
          nodeWidth={15}
          nodePadding={10}
          onLinkMouseOver={node => this.setState({activeLink: node})}
          onLinkMouseOut={() => this.setState({activeLink: null})}
          className="test"
          style={{
            color: '#4F97A3',
            links: {
              opacity: 0.3,
              color: 'white'
            },
            labels: {
              fontSize: '12px',
              color: '#1A3177'
            },
            rects: {
              strokeWidth: 2,
              stroke: '#1A3177'
            }
          }}
        />
      </div>
    );
  }
}
