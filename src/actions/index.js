export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_DIFF = "SET_DIFF";

function increment() {
  return {
    type: INCREMENT,
  };
}

function decrement() {
  return {
    type: DECREMENT,
  };
}

function setDiff(value) {
  return {
    type: SET_DIFF,
    data: {
      name: "노성형",
      number: value,
    },
  };
}

export { increment, decrement, setDiff };
