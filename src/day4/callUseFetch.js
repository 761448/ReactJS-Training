import React, { useState, useCallback } from "react";
import useFetch from "./useFetch";

export default function CallUseFetch() {
  const { data } = useFetch("https://fake-json-api.mock.beeceptor.com/users1");
  console.log({ data });
  return (
    <div>
      {Array.isArray(data) ? (
        data.map((item) => <li key={item.id}>{item.email}</li>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
