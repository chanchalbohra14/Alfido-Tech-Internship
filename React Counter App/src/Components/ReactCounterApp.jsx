import { useState } from "react";

function ReactCounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <>
      <div>
        <h1>React Counter App</h1>
        <div className="card">
          <button onClick={increment}>Increment</button>
          <p>Count is : {count}</p>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default ReactCounterApp;
