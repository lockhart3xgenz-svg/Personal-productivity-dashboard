import { useState } from "react";
import useLocalStorage from "../useLocalStorage";

function HabitTracker() {
  const [habits, setHabits] = useLocalStorage("habits", []);
  const [habitInput, setHabitInput] = useState("");

  const addHabit = () => {
    if (!habitInput.trim()) return;
    setHabits([...habits, { name: habitInput, done: false }]);
    setHabitInput("");
  };

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  const removeHabit = (index) => {
    const updated = habits.filter((_, i) => i !== index);
    setHabits(updated);
  };

  return (
    <div className="card p-3 mb-3">
      <h3>Habit Tracker</h3>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a habit..."
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
        />
        <button className="btn btn-success" onClick={addHabit}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {habits.map((habit, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              habit.done ? "list-group-item-primary" : ""
            }`}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleHabit(index)}
            >
              {habit.name}
            </span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeHabit(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;