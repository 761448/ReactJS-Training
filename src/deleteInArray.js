import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function DeleteInArray() {
  const [artists, setArtists] = useState(["item1", "item2", "item3"]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((art) => art !== artist));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
