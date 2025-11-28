import useState from "react";
import useLocalStorage from '../useLocalStorage';

function ToDoList () {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [ input, setInput] = useState ("");
}