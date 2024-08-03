import React, { useState, useEffect } from "react";

export default function DataList() {
  const [data, setDataList] = useState([]);

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setDataList(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div>hello</div>
      {data.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
