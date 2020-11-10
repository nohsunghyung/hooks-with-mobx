import React, { Component } from "react";
import { connect } from "react-redux";
import { setDiff } from "../actions";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1,
    };
  }
  onChangeValue = (e) => {
    const value = Number(e.target.value);
    this.setState({
      inputValue: value,
    });

    this.props.onUpdate(value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeValue}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (value) => dispatch(setDiff(value)),
  };
};

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;
