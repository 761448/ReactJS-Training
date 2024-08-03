const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function ArrayList() {
  console.log(people);
  const listItems = people.map((person) => <li key={person}>{person}</li>);
  return (
    <>
      <section>
        <h1>Rendering data from arrays</h1>
        <ul>{listItems}</ul>
      </section>
    </>
  );
}
