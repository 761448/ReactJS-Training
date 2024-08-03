import React, { useState } from "react";

function UnControlled() {
  const [names, setName] = useState("");
  const resetInput = () => {
    setName("");
  };

  return (
    <div>
      <input
        name="name"
        autoComplete="off"
        type="text"
        value={names}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetInput}>Reset</button>
      <div> My name is {names} </div>
    </div>
  );
}

export default UnControlled;
