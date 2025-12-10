import React, { useState } from "react";
import useLocalStorage from "../useLocalStorage";

function NotesWidget({ onRemove }) {
    const [notes, setNotes] = useLocalStorage("notes", []);
    const [input, setInput] = useState("");

    const addNote = () => {
        if (!input.trim()) return;
        setNotes([...notes, input]);
        setInput("");
    };

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    return (
        <div className="card p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Notes</h3>
                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={onRemove}
                >
                    Remove Widget
                </button>
            </div>

            <textarea
                className="form-control mb-2"
                rows="3"
                value={input}
                placeholder="Write a note..."
                onChange={(e) => setInput(e.target.value)}
            ></textarea>

            <small className="text-muted">
                {input.length} / 300 characters
            </small>

            <button className="btn btn-primary w-100 mt-2" onClick={addNote}>
                Add note
            </button>

            <ul className="list-group mt-3">
                {notes.map((note, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-start"
                    >
                        <span style={{ whiteSpace: "pre-wrap" }}>{note}</span>
                        <button
                            className="btn btn-sm btn-danger ms-3"
                            onClick={() => deleteNote(index)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesWidget;