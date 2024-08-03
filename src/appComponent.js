import { useState } from "react";
import ToDoInput from "./todoInput";
import ToDoItem from "./todoItem";
import ToDoList from "./todoList";

export default function AppComponent() {
  const [dataFromChild, setDataFromChild] = useState("");
  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
  return (
    <>
      {/* <ToDoItem /> */}
      {/* <ToDoList name={dataFromChild} /> */}
      {/* <ToDoInput sendDataToParent={handleDataFromChild} /> */}
      <ToDoInput />
    </>
  );
}
