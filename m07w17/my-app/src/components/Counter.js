import { useState } from 'react';

function Counter(props) {
  console.log(props);
  const [count, setCount] = useState(props.initialValue || 0);
  const handleAddClick = () => setCount(count + 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default Counter;
