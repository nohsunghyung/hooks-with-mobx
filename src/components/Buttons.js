import React, { Component } from "react";
import { increment, decrement } from "../actions";
import { connect } from "react-redux";

class Buttons extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onPlus}>
          +
        </button>
        <button type="button" onClick={this.props.onMinus}>
          -
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPlus: () => dispatch(increment()),
    onMinus: () => dispatch(decrement()),
  };
};

Buttons = connect(undefined, mapDispatchToProps)(Buttons);
export default Buttons;
