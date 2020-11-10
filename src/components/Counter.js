import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    value: state.counter.value,
  };
};

Counter = connect(mapStateToProps)(Counter);

export default Counter;
