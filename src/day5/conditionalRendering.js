function ItemTrue({ name, isPacked }) {
  if (isPacked) {
    /* return (
      <>
        <li className="item">{name} ✔</li>
      </>
    ); 

    //Conditional (ternary) operator (? :)

 return (
      <li className="item">
        {isPacked ? name + ' ✔' : name}
      </li>
    ); 
*/
    //Logical AND operator (&&)

    return (
      <li className="item">
        {name} {isPacked && "✔"}
      </li>
    );
  }
  return <li className="item">{name} </li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>
        If the isPacked prop is true, this code returns a different JSX tree.
        With this change, <br />
        some of the items get a checkmark at the end:
      </h1>
      <ul>
        <ItemTrue isPacked={true} name="Space suit" />
        <ItemTrue isPacked={true} name="Helmet with a golden leaf" />
        <ItemTrue isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
