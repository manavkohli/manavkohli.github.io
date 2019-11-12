import React, {Component} from "react";
import Graph from "react-graph-vis";


 export default class ForceDirectedGraph extends Component {
   render() {
     return (
       <Graph
         sytle={{font: "Karla"}}
         graph={this.props.graph}
         options={this.props.options}
         events={this.props.events}
         getNetwork={network => {
           //  if you want access to vis.js network api you can set the state in a parent component using this property
         }}
       />
     );
   }
 }
