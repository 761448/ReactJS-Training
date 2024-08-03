import React, { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const itemList = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);

  // Use useMemo to memoize the filtered list
  const filteredItems = useMemo(() => {
    console.log("Computing filtered items based on searchTerm"); // This will log whenever the list is recomputed
    return itemList.filter((arrayItem) =>
      arrayItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Optionally, use useEffect to log when component renders, but this does not directly relate to useMemo caching
  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div>
      <h1>Item List</h1>
      <div>search term : {searchTerm}</div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.id} :{item.name}
          </li>
        ))}
      </ul>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc.</button>
    </div>
  );
};

export default UseMemo;
