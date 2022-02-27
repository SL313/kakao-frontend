import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("");

  const set = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={set} />
      <article>반갑습니다! {name}님</article>
    </>
  );
};

export default WelcomeName;
