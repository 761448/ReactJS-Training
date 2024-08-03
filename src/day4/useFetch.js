import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState("");

  useEffect(() => {
    setData({ ...data, loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData({ ...data, data, loading: false }))
      .catch((error) => setData({ ...data, error, loading: false }));
  }, []);

  return data;
}
