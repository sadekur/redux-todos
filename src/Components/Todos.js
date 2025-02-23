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
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">Todos</h2>

      {isLoading && <p className="text-center text-gray-600 animate-pulse">Loading...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {todos.map((todo) => (
          <div key={todo.id} className="p-6 bg-[#001f3f] rounded-xl shadow-lg text-white">
            <h3 className="text-xl font-bold">ID: {todo.id}</h3>
            <p className="text-lg mt-2">Title: {todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
