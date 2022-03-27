import "./App.css";
// import Button from "./Button";
// import Title from "./Title";
// import Text from "./Text";
// import Adult from "./Adult";
// import Photo from "./Photo";
// import { ChangeEvent, KeyboardEvent } from "react";
// import Counter from "./Counter";
// import Adder from "./Adder";
// import WelcomeName from "./WelcomeName";
// import ConditionalText from "./ConditionalText";
// import ToDoList from "./ToDoList";
// import Test from "./pages/Test";
import { useState } from "react";
import { Paper, Tabs, Tab, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import Friends from "./pages/Friends";

// mui 쓰려면 install 해줘야함
// npm insatll @mui/icons-material
// npm install @mui/material

const App = () => {
  {
    /*
  const welcomeText = "Hello World!";
  const count = 10;
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      
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
      
      <input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCount={0} />
      <Adder />
      <br />
      <WelcomeName />
      <br />
      <ConditionalText />
      <br />
      <ToDoList />
      <br />
      <Test />
      

    </>
  );
  */
  }

  const [currentTab, setCurrentTab] = useState<string>("friends");
  const changeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };

  return (
    <>
      <Box sx={{ pb: 9 }}>{currentTab === "friends" && <Friends />}</Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs value={currentTab} centered variant="fullWidth">
          <Tab
            icon={<PeopleIcon />}
            label="친구"
            value="friends"
            onClick={() => changeTab("friends")}
          />
          <Tab
            icon={<ChatIcon />}
            label="채팅"
            value="chats"
            onClick={() => changeTab("chats")}
          />
        </Tabs>
      </Paper>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </>
  );
};

export default App;
