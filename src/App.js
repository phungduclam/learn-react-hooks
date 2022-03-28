import "./App.scss";
// import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "i can everything" },
    { id: 2, title: "i can love you" },
    { id: 3, title: "i can't everything" },
  ]);

  function HandleTodoList(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList]; //tao ra 1 mang moi
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1> react hook</h1>

      {/* <ColorBox /> */}
      <TodoList todos={todoList} onTodoClick={HandleTodoList} />
      <TodoForm />
    </div>
  );
}

export default App;
