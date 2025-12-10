import { useState } from "react";
import useLocalStorage from "../useLocalStorage";

function ToDoList() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const removeTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="card p-3 mb-3">
      <h3>To-Do List</h3>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? "list-group-item-success" : ""
            }`}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList