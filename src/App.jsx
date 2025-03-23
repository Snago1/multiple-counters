import { useState } from "react";
import { Button, Flex, Divider } from "antd";

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
      <Flex gap="small" justify="center">
        <Button type="primary" onClick={addCount}>
          Добавить счетчик
        </Button>
      </Flex>
      <Divider dashed />
      {counts.map((count, index) => (
        <div key={index}>
          <p style={{ textAlign: "center" }}>{count}</p>
          <Flex gap="small" justify="center" wrap>
            <Button type="dashed" onClick={() => increment(index)}>
              +
            </Button>
            <Button type="dashed" onClick={() => decrement(index)}>
              -
            </Button>
          </Flex>
        </div>
      ))}
    </div>
  );
}

export default App;
