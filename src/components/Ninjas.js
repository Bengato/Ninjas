/*eslint-disable*/
import React, { Component } from "react";
import Ninja from "./Ninja";
import AddNinja from "./AddNinja";
export default class Ninjas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: "Ryu", age: 30, belt: "Black", id: 1 },
        { name: "Yoshi", age: 20, belt: "Green", id: 2 },
        { name: "Crystal", age: 25, belt: "Pink", id: 3 }
      ],
      index: 4
    };
  }
  addNinja = newNinja => {
    newNinja.id = this.state.index;
    let newNinjaArr = [...this.state.ninjas, newNinja];
    console.log(newNinjaArr);
    this.setState(
      {
        ninjas: newNinjaArr
      },
      () => {
        this.setState({ index: this.state.index + 1 });
        console.log(this.state.ninjas);
      }
    );
  };
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id === id ? false : true;
    });
    this.setState({
      ninjas: ninjas
    });
  };
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="container">
          <Ninja ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}
