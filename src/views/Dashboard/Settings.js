// Settings.js
import React from "react";
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div>
        <ChildComponent onMessage={this.handleMessage} />
        <p>Message from Child: {this.state.message}</p>
      </div>
    );
  }
}

const ChildComponent = (props) => {
  const sendMessage = () => {
    props.onMessage("Hello from Child!");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Settings;
