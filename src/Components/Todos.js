import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from '../services/actions/todosAction';
import './Todos.css'; // Import the CSS file

export default function Todos() {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div className="todos-container">
      <h2 className="todos-title">Todos</h2>

      {isLoading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error.message}</p>}

      <div className="todos-grid">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>ID: {todo.id}</h3>
            <p>Title: {todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
