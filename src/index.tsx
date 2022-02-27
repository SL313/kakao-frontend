import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
  index.tsx 파일이 소스코드의 시작
  여기서 app.tsx 파일의 내용을 불러와 사용
  app.tsx 파일의 return 부분의 내용이 실행됨
  return: 화면에 그릴 것들을 지정해주는 요소
*/
