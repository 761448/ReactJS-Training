import React, { useState } from "react";
import ToDoList from "./todoList";
import "./styles.css";
import { styled, Styled } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

//let nextId = 0;
const HighlightNumber = styled.p`
  background-color: yellow;
  display: inline-block;
  margin-left: 10px;
`;

export default function ToDoInput({ sendDataToParent }) {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [nextId, setNextId] = useState(0);
  const [done, setDoneList] = useState([]);
  const [remove, setRemoveList] = useState([]);

  function handleClick() {
    sendDataToParent(data);
  }
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  function handleChange(event) {
    setName(event.target.value);
  }
  function addList() {
    setList([...list, { id: nextId, item: name }]);
    setName("");
  }

  return (
    <>
      <input
        className="todoInputBox"
        type="text"
        placeholder="Add your todo list"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        className="todoAddButton"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addList();
            handleClick;
            setCount(count + 1);
          }
        }}
        onClick={() => {
          addList();
          handleClick;
          setCount(count + 1);
          setNextId(nextId + 1);
        }}
      >
        Add
      </button>
      <p>ToDo List: </p>
      <ul>
        {list.map((item) => (
          <ToDoList items={item} />
        ))}
        {list.map((items) => (
          <>
            <li>
              {/* {items.id} : {items.item} */}
              {items.item}
            </li>
            <button
              onClick={() => {
                const afterRemove = [
                  list.map((item) => {
                    if (item.id > items.id) {
                      item.id = item.id - 1;
                    }
                  }),
                ];
                afterRemove.map((item) => (item.id = item.id - 1));
                setList(list.filter((a) => a !== items));
                setCount(count - 1);
                //setNextId(nextId - 1);
                setRemoveList([...remove, items]);
              }}
            >
              remove
            </button>
            <button
              onClick={() => {
                setList(list.filter((a) => a !== items));
                setCount(count - 1);
                //setNextId(nextId - 1);
                setDoneList([...done, items]);
              }}
            >
              done
            </button>
          </>
        ))}
      </ul>
      <p>Done Items:</p>
      <ul>
        {done.map((items) => (
          <>
            <li style={{ color: "green" }}>
              {/* {items.id} : {items.item} */}
              {items.item}
            </li>
          </>
        ))}
      </ul>
      <p>Removed Items:</p>
      <ul>
        {remove.map((items) => (
          <>
            <li style={{ color: "red" }}>
              {/* {items.id} : {items.item} */}
              {items.item}
            </li>
            <button
              onClick={() => {
                setRemoveList(remove.filter((a) => a !== items));
                //const afterRemoveList = [...list, { id: nextId, item: items }];
                //setList(afterRemoveList);
                setCount(count + 1);
                setList([...list, items]);
              }}
            >
              Put back in todo list
            </button>
          </>
        ))}
      </ul>
      <p className="pWarning">
        Recommended : Total in todo list shouldn't exceed 10{" "}
      </p>{" "}
      <p style={{ display: "inline-block" }}>currently ToDo Item you have : </p>
      <HighlightNumber>{count}</HighlightNumber>
    </>
  );
}
