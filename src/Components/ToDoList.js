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

  return (
    <div className="card p-3 mb-3">
      <h3>To-Do List</h3>
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button className="btn btn-primary mt-2" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default ToDoList;