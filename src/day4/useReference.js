import React, { useState, useRef, useEffect } from "react";

function UseRefs() {
  // const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [prevCountrRef, setPrevCountrRef] = useState();
  // const prevCountrRef = useRef("");
  function handleClick() {
    setCounter(Math.floor(Math.random() * 100));
    setPrevCountrRef(counter);
  }

  // useEffect(() => {
  //   prevCountrRef.current = counter;
  // });

  return (
    <div>
      <h1>Random Number: {counter} </h1>
      <h2>Previous Number: {prevCountrRef}</h2>
      {/* <h2>Previous Number: {prevCountrRef.current}</h2> */}
      <button onClick={handleClick}>Generate random numbers</button>
    </div>
  );
}

export default UseRefs;
