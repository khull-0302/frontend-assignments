import { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
    };
    this.sayGreeting = this.sayGreeting.bind(this);
  }
  sayGreeting() {
    this.setState((prevState) => ({
      greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
    }));
  }
  render() {
    return (
      <div className="greeting-container">
        <h1>{this.state.greeting}</h1>
        <button className="greeting-button" onClick={() => this.sayGreeting()}>
          Toggle me
        </button>
      </div>
    );
  }
}

export default Greeting;
