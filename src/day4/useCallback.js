import React, { useState, useCallback } from "react";

function Callback() {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.photo} width="400" height="400" />
              <p>{item.photo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Callback;
