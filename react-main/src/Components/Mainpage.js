import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosAction, deleteTodo, toggleTodo } from '../store/slise/todoSlise';

export default function MainPage() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodosAction());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' , cursor: 'pointer'}}>
            {todo.title}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}