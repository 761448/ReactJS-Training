import { useState } from "react";
import "./styles.css";
import Heading from "./header.js";
import Footer from "./footer";
import Child from "./child";
import getGreeting from "./greeting";
import Counter from "./counter";
import Button from "./button";

export default function App() {
  const nameArray = ["Abhishek", "kumar"];
  const [name, setName] = useState("John");
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <section>
      <Heading></Heading>
      {nameArray.map((item) => {
        console.log(item);
      })}
      <div className="App">
        <label for="fname">First name: </label>
        <input type="text" id="fname" name="fname" onChange={handleChange} />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <Child name={name} />
        <getGreeting />
      </div>
      <Counter />
      <Button />
      <Footer></Footer>
    </section>
  );
}
