import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';
import TodoList from '../components/todo/TodoList';
import TodoTemplate from '../components/todo/TodoTemplate';

function TodoPage() {
  return (
    <TodoTemplate>
      <TodoCreate />
      <TodoList />
    </TodoTemplate>
  );
}

export default TodoPage;
