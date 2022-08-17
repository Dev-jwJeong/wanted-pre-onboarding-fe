import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdMode } from 'react-icons/md';
import { useTodoItemHook } from '../../hooks/todo/useTodoItemHook';
import { useNavigate } from 'react-router-dom';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const ExtraBlock = styled.div`
  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

function TodoItem({ todo }) {
  const { onDeleteTodo, onGetCheckTodo } = useTodoItemHook();
  const navigate = useNavigate();

  const onMoveModify = (id) => {
    navigate(`/todo/modify/${id}`);
  };

  return (
    <>
      <TodoItemBlock>
        <CheckCircle
          done={todo.isCompleted}
          onClick={() => onGetCheckTodo(todo.id, todo.todo, todo.isCompleted)}
        >
          {todo.isCompleted && <MdDone />}
        </CheckCircle>
        <Text>{todo.todo}</Text>
        <ExtraBlock>
          <MdMode onClick={() => onMoveModify(todo.id)} />
          <MdDelete onClick={() => onDeleteTodo(todo.id)} />
        </ExtraBlock>
      </TodoItemBlock>
    </>
  );
}

export default TodoItem;
