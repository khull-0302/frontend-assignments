// import { Component } from "react";

// class Event extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//       greeting: "Hello",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.sayGreeting = this.sayGreeting.bind(this);
//   }

//   handleChange = (amount) => {
//     this.setState((prevState) => {
//       return {
//         count: amount ? prevState.count + amount : 1,
//       };
//     });
//   };

//   sayGreeting() {
//     this.setState((prevState) => ({
//       greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.handleChange(1)}>Add</button>
//         <button
//           onClick={() => this.handleChange(-1)}
//           disabled={this.state.count <= 1}
//         >
//           Subtract
//         </button>
//         <button
//           onClick={() => this.handleChange(0)}
//           disabled={this.state.count === 1}
//         >
//           Reset
//         </button>
//         <button onClick={() => this.sayGreeting()}>
//           {this.state.greeting}
//         </button>
//       </div>
//     );
//   }
// }

// export default Event;

import { Component } from "react";
import "./styles/main.scss";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ShowHide from "./components/ShowHide";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Counter />
        <Greeting />
        <ShowHide />
      </div>
    );
  }
}

export default App;
