import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (amount) => {
    this.setState((prevState) => {
      return {
        count: amount ? prevState.count + amount : 1,
      };
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>{this.state.count}</h1>
        <div className="counter-buttons">
          <button className="add" onClick={() => this.handleChange(1)}>
            Add
          </button>
          <button
            className="subtract"
            onClick={() => this.handleChange(-1)}
            disabled={this.state.count <= 1}
          >
            Subtract
          </button>
          <button
            className="reset"
            onClick={() => this.handleChange(0)}
            disabled={this.state.count === 1}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
