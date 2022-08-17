import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeField,
  createTodoFailure,
  createTodoSuccess,
  initializeForm,
} from '../../store/todoSlice';

export function useTodoCreateHook() {
  const { todoText, createTodo } = useSelector(({ todo }) => ({
    todoText: todo.todoText,
    createTodo: todo.createTodo,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(
      changeField({
        key: 'todoText',
        value,
      }),
    );
  };

  async function getCreateTodo() {
    // eslint-disable-next-line no-useless-escape
    const access_token = localStorage.getItem('token').replace(/\"/gi, '');
    try {
      await axios.post(
        'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
        {
          todo: todoText,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      dispatch(createTodoSuccess(true));
    } catch (e) {
      dispatch(createTodoFailure(e));
    }
  }

  const onGetCreateTodo = (e) => {
    e.preventDefault();
    getCreateTodo();
  };

  useEffect(() => {
    dispatch(initializeForm('todoText'));
  }, [dispatch]);

  useEffect(() => {
    if (createTodo) {
      window.location.replace('/wanted-pre-onboarding-fe/todo');
    }
  }, [createTodo, navigate]);

  return { onChange, todoText, onGetCreateTodo };
}
