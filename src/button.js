export default function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button align="middle" onClick={handleClick}>
      Click me
    </button>
  );
}
