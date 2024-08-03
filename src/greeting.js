function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user.name}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = { name: "Jane" };

const element = (
  <div>
    {getGreeting(user)}
    <p>Nice to meet you.</p>
  </div>
);

export default getGreeting;
