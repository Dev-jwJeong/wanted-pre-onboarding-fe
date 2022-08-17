import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTodoItemHook } from '../../hooks/todo/useTodoItemHook';

const ModifyTodoBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ModifyForm = styled.div`
  width: 512px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 7px;
  background-color: lightgray;

  .buttonWrapper {
    margin-top: 1rem;
    text-align: center;

    button {
      padding: 0.5rem;
    }
  }
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;

function ModifyTodo() {
  const { updateText, onChange, onGetUpdateTodo } = useTodoItemHook();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <ModifyTodoBlock>
      <ModifyForm>
        <StyledInput type="text" value={updateText} onChange={onChange} />
        <div className="buttonWrapper">
          <button
            style={{ marginLeft: '1rem' }}
            onClick={() => onGetUpdateTodo(id)}
          >
            수정하기
          </button>
          <button style={{ marginLeft: '1rem' }} onClick={() => navigate(-1)}>
            취소
          </button>
        </div>
      </ModifyForm>
    </ModifyTodoBlock>
  );
}

export default ModifyTodo;
