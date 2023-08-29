import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  // states
  const [task, setTask] = React.useState(" ");
  const [todos, setTodos] = React.useState([]);

  console.log("todo list", todos, task);
  return (
    <div className="App">
      <div className="card">
        <h1>Todo App</h1>
        <div className="input-section">
          <input
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />{" "}
          <button
            onClick={() => {
              const newTodos = [...todos];
              newTodos.push(task);
              setTodos(newTodos);
              setTask("");
            }}
            className="btn add"
          >
            Add Task
          </button>
        </div>
     <div class="task-section list">
     <ol type='1'>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ol>
     </div>
      </div>
    </div>
  );
}

export default App;
