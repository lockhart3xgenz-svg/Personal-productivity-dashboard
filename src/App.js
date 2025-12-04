import React from "react";
import ToDoList from "./Components/ToDoList";
import HabitTracker from './Components/HabitTracker';
import useLocalStorage from './useLocalStorage';
import ToggleDarkMode from './Components/ToggleDarkMode';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return (
    <div className={darkMode ? 
      'bg-dark text-light min-vh-100' :
      'bg-light text-dark min-vh-100'} 
    >
      <div className="container py-5">
        <h1 className='mb-4 text-center'>
          Dashboard Productivity Features
        </h1>

        
        <ToggleDarkMode darkMode={darkMode}
        setDarkMode={setDarkMode}
        />

        { darkMode ? "dark" : "light"}

        <HabitTracker />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;

