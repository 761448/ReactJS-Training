import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function SortArray() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const newlist = [...list];
    // setList(list);
    newlist.reverse();
    //list.reverse();
    setList(newlist);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
