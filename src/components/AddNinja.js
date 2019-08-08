/*eslint-disable*/
import React, { Component } from "react";

export default class AddNinja extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      belt: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.name != "" &&
      this.state.age != "" &&
      this.state.belt != ""
    ) {
      this.props.addNinja(this.state);
      this.setState({
        name: "",
        age: "",
        belt: ""
      });
    } else {
      alert("Illegal input");
    }
  };
  render() {
    return (
      <div>
        <form
          className="container m-2 "
          onSubmit={this.handleSubmit}
        >
          <div className="input-group input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control"
              aria-label="Name"
            />
          </div>
          <div className="input-group input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">Age</span>
            </div>
            <input
              type="text"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
              className="form-control"
              aria-label="Name"
            />
          </div>
          <div className="input-group input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">Belt</span>
            </div>
            <input
              type="text"
              id="belt"
              value={this.state.belt}
              onChange={this.handleChange}
              className="form-control"
              aria-label="Name"
            />
          </div>
          <button className="btn btn-sm btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
