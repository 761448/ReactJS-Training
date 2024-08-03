import React, { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function submitAction(formData) {
    const fname = formData.get("fname");
    alert(`You searched for '{fname}'`);
  }
  return (
    <section className="form">
      <form action={submitAction}>
        <label for="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="John"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="John.Doe@gmail.com"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
