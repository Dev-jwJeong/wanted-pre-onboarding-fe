import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoCreateHook } from '../../hooks/todo/useTodoCreateHook';

const CircleButton = styled.button`
  background-color: none;
  outline: none;
  border: none;
  background-color: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #adb5bd;
  }
`;

const InsertForm = styled.form`
  display: flex;
  background-color: #495057;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;

  &::placeholder {
    color: #dee2e6;
  }
`;

function TodoCreate() {
  const { onChange, todoText, onGetCreateTodo } = useTodoCreateHook();

  return (
    <>
      <InsertForm onSubmit={onGetCreateTodo}>
        <Input
          type="text"
          value={todoText}
          placeholder="할 일을 입력 후, Enter 를 누르세요"
          onChange={onChange}
        />
        <CircleButton>
          <MdAdd />
        </CircleButton>
      </InsertForm>
    </>
  );
}

export default TodoCreate;
