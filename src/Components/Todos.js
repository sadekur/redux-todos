import React, { use, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from '../services/actions/todosAction';

export default function Todos() {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  
  return (
    <div>
      <h2>Todos</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}
