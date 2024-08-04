import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
//import "./src/styles.css";

let nextId = 0;

export default function Assigment4() {
  const [listOfItems, setListOfItems] = useState(["Item3", "Item1", "Item2"]);
  const [newItem, setNewItem] = useState("");
  function handleNewItem() {
    const newListOfItems = [...listOfItems, newItem];
    setListOfItems(newListOfItems);
    setNewItem("");
  }
  function handleShorting() {
    const newListOfItems = [...listOfItems];
    // newListOfItems.map((e) => e.toLowerCase);
    // sort order -1, 1, or 0 (for before, after, or equal).
    newListOfItems.sort((a, b) => (a > b ? 1 : -1));
    setListOfItems(newListOfItems);
  }

  return (
    <>
      <input
        type={Text}
        value={newItem}
        placeholder="Add more items in list"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onClick={handleNewItem}
      >
        Add
      </button>
      <br />
      <br />
      <div className="inlineSortButton">
        <p>Items in list : </p>
        <button onClick={handleShorting}>Sort</button>
      </div>
      <ul>
        {listOfItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
