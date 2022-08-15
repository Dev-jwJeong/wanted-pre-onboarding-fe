import React from 'react';
import styled from 'styled-components';
import { useTodoListHook } from '../../hooks/todo/useTodoListHook';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 10rem;
`;

function TodoList() {
  const { todo, onChange, updateText, onToggle, toggle, onGetUpdateTodo } =
    useTodoListHook();

  console.log(todo);

  return (
    todo && (
      <>
        <TodoListBlock>
          {todo.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
          ))}
        </TodoListBlock>
        {toggle && (
          <>
            <StyledInput type="text" value={updateText} onChange={onChange} />
            <button style={{ marginBottom: '10rem' }} onClick={onGetUpdateTodo}>
              제출
            </button>
          </>
        )}
      </>
    )
  );
}

export default TodoList;
