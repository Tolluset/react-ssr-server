import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((prv) => prv + 1);
  };

  return (
    <>
      <div>hello SSR!</div>
      <button onClick={addCount}>Like it {count} times!</button>
    </>
  );
}
