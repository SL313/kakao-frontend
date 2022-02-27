import "./App.css";
// import Button from "./Button";
// import Title from "./Title";
// import Text from "./Text";
// import Adult from "./Adult";
// import Photo from "./Photo";
import { ChangeEvent, KeyboardEvent } from "react";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import ToDoList from "./ToDoList";

const App = () => {
  // const welcomeText = "Hello World!";
  // const count = 10;
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      {/*
      <div className="App">
        <Title title={welcomeText} subTitle="HI" />
        {count > 5 ? <Button name="go" /> : <Button name="back" />}
        <br />
        <Button name="hello" />
        <Button name="world" />
        <br />
        <Text text="Oh" type="header" />
        <Adult age={10} />
        <br />
        <Photo
          address="http://cdn.dhnews.co.kr/news/photo/201908/110315_110640_565.jpg"
          description="중앙대학교"
        />
      </div>
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          console.log(event.currentTarget.value)
        }
      />
      */}
      <input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCount={0} />
      <Adder />
      <br />
      <WelcomeName />
      <br />
      <ConditionalText />
      <br />
      <ToDoList />
    </>
  );
};

export default App;
