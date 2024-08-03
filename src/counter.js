import React, { useState } from "react";

const Counter = () => {
  // Destructure the count value and the function to update it
  const [count, setCount] = useState(1);
  return (
    <div align="middle">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(5)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
