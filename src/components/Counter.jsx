import { useState } from "react";

export function Counter() {
  const [value, setCounter] = useState(0);

  function increment() {
    setCounter(value + 1);
  }

  function decrement() {
    setCounter(value - 1);
  }
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
