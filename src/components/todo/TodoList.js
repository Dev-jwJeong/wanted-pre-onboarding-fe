import React from 'react';
import styled from 'styled-components';
import { useTodoListHook } from '../../hooks/todo/useTodoListHook';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

function TodoList() {
  const { todo } = useTodoListHook();

  return (
    todo && (
      <>
        <TodoListBlock>
          {todo.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TodoListBlock>
      </>
    )
  );
}

export default TodoList;
