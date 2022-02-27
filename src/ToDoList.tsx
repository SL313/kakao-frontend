import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

type ToDoType = {
  id: number;
  todo: string;
};

const ToDoList = (): JSX.Element => {
  const [todoValue, setTodoValue] = useState<string>("");
  //배열에 대한 state 값
  const [todoList, setTodoList] = useState<ToDoType[]>([]);
  //const [todoId, setTodoId] = useState(1);

  /*const save = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  const addList = () => {
    const todo: ToDoType = { id: todoId, todo: todoValue };
    // todoList에 todo를 추가
    todoList.push(todo);

    // 배열의 시작 주소는 동일 => 새로고침이 일어나지 않음
    //[1, 2, 3] => 1 ,2, 3 || [...todoList] => [todo1, todo2, todo3]
    setTodoList([...todoList]);

    // todoId를 증가
    setTodoId(todoId + 1);

    // 입력 값을 보관한 state를 초기화
    setTodoValue("");
  };

  const deleteList = (id: number) => {
    //filter라는 기능을 이용
    //삭제하려는 값이 존재하면 거짓이 되게끔
    setTodoList(
      todoList.filter((todo) => {
        todo.id !== id;
      })
    );
  };*/

  const save = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  const addList = async () => {
    await axios.post("http://localhost:5000/todos", { todo: todoValue });
    setTodoValue("");
    await getToDoList();
  };

  const deleteList = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    await getToDoList();
  };

  const getToDoList = async () => {
    const { data } = await axios.get<ToDoType[]>("http://localhost:5000/todos");
    setTodoList(data);
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <>
      <input type="text" onChange={save} value={todoValue} />
      <button onClick={addList}>save</button>
      {todoList.map((todo: ToDoType) => {
        return (
          <section key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteList(todo.id)}>delete</button>
          </section>
        );
      })}
    </>
  );
};

export default ToDoList;
