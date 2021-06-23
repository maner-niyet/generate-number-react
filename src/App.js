import React from "react";
import Input from "./components/Input";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minValue: "",
      maxValue: "",
      randomNumber: 0
    };
  }

  getMinInput = (event) => {
    let minNum = Number(event.target.value);
    this.setState({ minValue: minNum });
  };
  getMaxInput = (event) => {
    let maxNum = Number(event.target.value);
    this.setState({ maxValue: maxNum });
  };
  generate = () => {
    const { minValue, maxValue } = this.state;

    if (minValue < maxValue) {
      let randomNum = Math.floor(
        Math.random() * (maxValue - minValue + 1) + minValue
      );

      this.setState({ randomNumber: randomNum });
    } else {
      alert("Invalid input");
    }
  };

  clear = () => {
    this.setState({
      minValue: "",
      maxValue: "",
      randomNumber: 0
    });
  };

  render() {
    console.log(this.state.minValue);
    return (
      <div className="container">
        <h1>{this.state.randomNumber}</h1>
        <Input
          func={this.getMinInput}
          value={this.state.minValue}
          label="lower value"
        />
        <Input
          func={this.getMaxInput}
          value={this.state.maxValue}
          label="higher value"
        />

        <button style={{ background: "green" }} onClick={this.generate}>
          Generate
        </button>
        <button style={{ background: "grey" }} onClick={this.clear}>
          Clear
        </button>
      </div>
    );
  }
}
export default App;
