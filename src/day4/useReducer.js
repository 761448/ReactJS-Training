import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "plus") {
    return state + 1;
  } else {
    if (action.type === "minus") return state - 1;
  }
};

function UseReducer() {
  // const [counter, setCounter] = useState("");
  const [count, dipatcher] = useReducer(reducer, 1);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dipatcher({ type: "plus" })}>Increment</button>
      <button onClick={() => dipatcher({ type: "minus" })}>Decrement</button>
    </div>
  );
}

export default UseReducer;
