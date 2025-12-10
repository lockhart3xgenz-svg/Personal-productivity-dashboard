import React from "react";
import ToDoList from "./Components/ToDoList";
import HabitTracker from './Components/HabitTracker';
import useLocalStorage from './useLocalStorage';
import ToggleDarkMode from './Components/ToggleDarkMode';
import NotesWidget from './Components/NotesWidget';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  console.log("Component checks:", {
    NotesWidget,
    HabitTracker,
    ToDoList,
    ToggleDarkMode
  });

  return (
    <div
      className={darkMode
        ? 'bg-dark text-light min-vh-100'
        : 'bg-light text-dark min-vh-100'}
    >
      <div className="container py-5">
        <h1 className='mb-4 text-center'>
          Dashboard Productivity Features
        </h1>

        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />

        <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>

        <NotesWidget />
        <HabitTracker />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;