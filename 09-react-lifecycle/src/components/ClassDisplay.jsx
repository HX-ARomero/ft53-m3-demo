import React, { Component } from "react";

export default class ClassDisplay extends Component {

  componentDidMount() {
    console.log("Display se montó al DOM");
  }

  componentWillUnmount() {
    console.log("Display se desmontará del Dom...");
  }

  render() {
    return (
      <div style={{ backgroundColor: "darkslategrey"}}>
        <h3>Display</h3>
      </div>
    );
  }
}