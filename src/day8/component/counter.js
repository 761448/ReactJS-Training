import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <h3>Counter:</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
