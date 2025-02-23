import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from '../services/actions/todosAction';

export default function Todos() {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Todos</h2>

      {isLoading && <p className="text-center text-gray-600 animate-pulse">Loading...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <div key={todo.id} className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-gray-800">ID: {todo.id}</h3>
            <p className="text-gray-600 mt-2">Title: {todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
