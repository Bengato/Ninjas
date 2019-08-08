import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ryu",
      age: 30,
      tempName: ""
    };
  }
  handleClick = e => {
    console.log(e.target);
  };
  handleMouseOver = e => {
    console.log(e.target, e.pageX);
  };
  handleCopy = e => {
    console.log("Try being Original!");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      name: this.state.tempName,
      tempName: ""
    });
    console.log("Form submitted");
  };
  handleTempName = e => {
    this.setState({
      tempName: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Hey, ninjas!</h2>
        <p>
          My name is {this.state.name} and I am {this.state.age}
        </p>
        <button onClick={this.handleClick}>Click me!</button>
        <button onMouseOver={this.handleMouseOver}>Hover me!</button>
        <p onCopy={this.handleCopy}>What we think, we become.</p>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleTempName} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
