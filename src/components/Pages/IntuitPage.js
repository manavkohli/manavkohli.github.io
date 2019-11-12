import React, {Component} from 'react'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import ScrollingPage from './ScrollingPage'
import ChangingTextField from '../ChangingTextField/ChangingTextField'
import ForceDirectedGraph from '../Graph/ForceDirectedGraph'

export default class IntuitPage extends Component {
  render() {
    const languageModelContent = (
      <h1> Language Model </h1>
    )
    const vuiContent = (
      <h1> VUI </h1>
    )
    const adjectives = [
      " sleeping ",
      " hungry ",
      " quiet ",
      " ecstatic ",
      " frank "
    ]
    const animals = [
      " bear ",
      " ocelot ",
      " dog ",
      " giraffe "
    ]
    const graph = {
      nodes: [
        { id: 1, label: "Conversation State 1", title: "node 1 tootip text" },
        { id: 2, label: "Conversation State 2", title: "node 2 tootip text" },
        { id: 3, label: "Conversation State 3", title: "node 3 tootip text" },
        { id: 4, label: "Conversation State 4", title: "node 4 tootip text" },
        { id: 5, label: "Conversation State 5", title: "node 5 tootip text" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    };
    const options = {
      layout: {
        hierarchical: true
      },
      edges: {
        color: "white"
      },
      height: "500px"
    };

    const events = {
      select: function(event) {
        var { nodes, edges } = event;
      }
    };

    const languageModelSection = (
      <div>
        <HorizontalCard text={languageModelContent} imageAlignment="right"/>
        <div className="big-text">
        The brown fox jumps over the
          <ChangingTextField textValues={adjectives} offset={6000} color="#E1B07E"/>
          <ChangingTextField textValues={animals} offset={1500} color="#86A397"/>
        </div>
      </div>
    )
    const vuiSection = (
      <div>
        <HorizontalCard text={vuiContent} imageAlignment="right"/>
        <ForceDirectedGraph
          graph={graph}
          options={options}
          events={events}
        />
      </div>
    )

    const items = [
      languageModelSection,
      vuiSection
    ]

    return <ScrollingPage items={items} />
  }
}
