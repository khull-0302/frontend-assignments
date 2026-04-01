import { Component } from "react";

class ShowHide extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: 1,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => ({
      isVisible: prevState.isVisible === 1 ? 0 : 1,
    }));
  }

  render() {
    return (
      <div className="show-hide-container">
        {this.state.isVisible === 1 && <h1>Hide Me</h1>}

        <button className="show-hide-button" onClick={this.toggleVisibility}>
          {this.state.isVisible === 1 ? "Hide" : "Show me"}
        </button>
      </div>
    );
  }
}

export default ShowHide;
