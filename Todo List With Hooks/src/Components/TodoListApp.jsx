import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./TodoListApp.css";

function TodoListApp() {
  const [todos, setTodos] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ task }) => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, isCompleted: false }]);
      reset();
    }
  };

  const toggleTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <input {...register("task")} placeholder="Add a task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(({ id, text, isCompleted }) => (
          <li key={id}>
            <label className="todo-item">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => toggleTodo(id)}
              />
              <span
                style={{
                  textDecoration: isCompleted ? "line-through" : "none",
                }}
              >
                {text}
              </span>
            </label>
            <button onClick={() => deleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
