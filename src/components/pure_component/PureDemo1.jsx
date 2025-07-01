import React, { Component, PureComponent } from "react";

export default class PureDemo1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "virat",
    };
  }
  updateName = () => {
    this.setState({ name: "virat" });
  };
  render() {
    console.log("Render called...");
    return (
      <>
        <h3>This is Pure Component Example</h3>
        <div>Name is: {this.state.name}</div>

        <button onClick={this.updateName}>Update Name</button>
      </>
    );
  }
}
