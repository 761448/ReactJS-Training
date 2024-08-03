import { useState } from "react";

let nextId = 0;

export default function AddDataInArray() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([
    "test1",
    "test2",
    "test3",
    "test7",
    "test5",
  ]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
