import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./TodoListApp.css";

const LOCAL_STORAGE_KEY = "todos";

const saveTodos = (todos) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const loadTodos = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const TodoListApp = () => {
  const [todos, setTodos] = useState(loadTodos());
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const onSubmit = (data) => {
    if (!data.task.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: data.task, completed: false },
    ]);
    reset();
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  // console.log("todos", todos.filter());

  return (
    <div className="todo">
      <div className="todo-container">
        <h2 className="todo-title">Todo List</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
          <input
            {...register("task", { required: true })}
            placeholder="Add a new task"
            className="todo-input"
          />
          <button type="submit" className="todo-add-button">
            Add
          </button>
        </form>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="todo-delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListApp;
