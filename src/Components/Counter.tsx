import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <>
      <div>
        <input type='number' value={count} onChange={handleChange} />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={() => setCount(count - 1)}>Remove</button>
      </div>
    </>
  );
}
export default Counter;
