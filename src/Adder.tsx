import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const n1 = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 0) {
      setNum1(Number.parseInt(event.currentTarget.value));
    } else {
      setNum1(0);
    }
  };
  const n2 = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 0) {
      setNum2(Number.parseInt(event.currentTarget.value));
    } else {
      setNum2(0);
    }
  };

  const add = num1 + num2;

  return (
    <>
      <input type="text" onChange={n1} />+<input type="text" onChange={n2} />
      <section>계산결과: {add}</section>
    </>
  );
};

export default Adder;
