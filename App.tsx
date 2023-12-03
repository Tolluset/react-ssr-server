import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((prv) => prv + 1);
  };

  return (
    <>
      <div>Hello react SSR!</div>
      <button onClick={addCount}>Like it {count} times!</button>
    </>
  );
}
