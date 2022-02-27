import { useState, ChangeEvent } from "react";

const ConditionalText = () => {
  const [text, setText] = useState<string>("");

  const set = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={set} />
      <br />
      출력문:
      {text.length > 5 && <span>{text}</span>}
    </>
  );
};

export default ConditionalText;
