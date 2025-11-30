import React from "react";
import ToDoList from "./Components/ToDoList";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage ('darkMode', false);

  return(
    <div className={darkMode ? 'bg-dark text-light min-vh-100': 'bg-light text-dark min-vh-100'}>
      <div className="container py-5">
      <h1 className="mb-4 text-center">Personal Productivity Dashboard</h1>
      <ToDoList />
      </div>
    </div>
  );
}

export default App;