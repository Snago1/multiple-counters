import { useState } from "react";

function App() {
  const [counts, setCounts] = useState([0]);

  const addCount = () => {
    setCounts([...counts, 0]);
  };
  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };
  const decrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] -= 1;
    setCounts(newCounts);
  };

  return (
    <div>
      <button onClick={addCount}>Добавить счетчик</button>
      {counts.map((count, index) => (
        <div key={index}>
          <p>{count}</p>
          <button onClick={() => increment(index)}>+</button>
          <button onClick={() => decrement(index)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default App;
