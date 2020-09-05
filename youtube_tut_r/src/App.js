import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const newCounterArr = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounterArr });
  };

  handleIncrement = (object) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(object);
    counters[index] = { ...object };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const resetCounters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: resetCounters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counter={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
