import { useState } from "react";

export default function Counter(props) {

  // let count = 0;
  const [count, setCount] = useState(0); // [state, updaterFunction]

  const handleClick = () => {
    // setCount(count + 1); // async, done later
    setCount(prev => prev + 1)
  }

  return (
    <section>
      <h2>BAD COUNTER</h2>
      <p>The button was clicked {count} times!</p>
      <button onClick={handleClick}>Increment</button>
    </section>
  );
}