import { useState, MouseEvent } from "react";

type CounterType = {
  defaultCount: number;
};

const Counter = (props: CounterType) => {
  const { defaultCount } = props;
  const [count, setCount] = useState<number>(defaultCount);

  const increaseCount = (event: MouseEvent<HTMLButtonElement>) =>
    setCount(count + 1);

  const decreaseCount = (event: MouseEvent<HTMLButtonElement>) =>
    setCount(count - 1);

  return (
    <section>
      <section>{count}</section>
      <section>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </section>
    </section>
  );
};

export default Counter;
