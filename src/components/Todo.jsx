import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../helpers/store";

export function Todo() {
    const [newTodo, setNewTodo] = useState("");
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    function handleTodoChange(event) {
        setNewTodo(event.target.value);
    }

    function handleButtonClick() {
        dispatch(addTodo(newTodo));
    }

    function handleDeleteClick(todo) {
        dispatch(deleteTodo(todo));
    }

    return <div>
        <h1>Todos</h1>
        <input type = "text" onChange={handleTodoChange} />
        <button onClick={handleButtonClick}>Add Todo</button>
        <ul>
            {todos.map((t) => {
                return <li>{t} <button onClick={() => handleDeleteClick(t)}>Delete Todo</button></li>
            })}
        </ul>
    </div>
}