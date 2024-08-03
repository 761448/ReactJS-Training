import React, { useState } from "react";

export default function ToDoList(items) {
  const [check, setCheckCount] = useState(0);
  function handleChange(e) {
    if (e.target.checked) {
      setCheckCount(...check, (check = check++));
    } else {
      setCheckCount(...check);
    }
  }
  return (
    <>
      {/* <ul>
        <li>{items.name}</li>
      </ul> */}
    </>
  );
}
