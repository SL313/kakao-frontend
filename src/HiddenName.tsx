import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");

  const set = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length >= 3) {
      const fName = newName.substring(0, 1);
      newName.substring(1, name.length - 1);
      newName.substring(newName.length - 1, newName.length);
    }
  };
  return (
    <>
      <input type="text" onChange={set} />
      <br />
      이름: {name}
    </>
  );
};

export default HiddenName;
