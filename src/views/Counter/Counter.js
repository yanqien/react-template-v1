import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1 onClick={this.tick}>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Counter;
