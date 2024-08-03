import { useState } from "react";

let nextId = 3;
const initialArtists = [
  "Marta Colvin Andrade",
  "Lamidi Olonade Fakeye",
  "Louise Nevelson",
];

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(["test1", "test2", "test3"]);

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists,
      // New item:
      name,
      // Items after the insertion point:
    ];
    setArtists([...artists, name]);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li>{artist}</li>
        ))}
      </ul>
    </>
  );
}
