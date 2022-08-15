import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  getTodoFailure,
  getTodoSuccess,
  initializeForm,
  updateTodoFailure,
  updateTodoSuccess,
} from '../../store/todoSlice';

export function useTodoListHook() {
  const { todo, updateText, updateTodo } = useSelector(({ todo }) => ({
    todo: todo.todo,
    updateText: todo.updateText,
    updateTodo: todo.updateTodo,
  }));
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const onToggle = () => {
    setToggle(!toggle);
    dispatch(initializeForm('updateText'));
  };

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(
      changeField({
        key: 'updateText',
        value,
      }),
    );
  };

  async function getUpdateTodo(id) {
    // eslint-disable-next-line no-useless-escape
    const access_token = localStorage.getItem('token').replace(/\"/gi, '');
    try {
      await axios.put(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/1320`,
        {
          todo: updateText,
          isCompleted: false,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      dispatch(updateTodoSuccess(true));
    } catch (e) {
      dispatch(updateTodoFailure(e));
    }
  }

  const onGetUpdateTodo = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('수정하시겠습니까?') === true) {
      getUpdateTodo();
    } else {
      return;
    }
  };
  useEffect(() => {
    async function getTodo() {
      // eslint-disable-next-line no-useless-escape
      const access_token = localStorage.getItem('token').replace(/\"/gi, '');
      try {
        const response = await axios.get(
          'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        );
        dispatch(getTodoSuccess(response.data));
      } catch (e) {
        dispatch(getTodoFailure(e));
      }
    }
    getTodo();
  }, [dispatch]);

  useEffect(() => {
    if (updateTodo) {
      window.location.replace('/todo');
    }
  }, [updateTodo]);

  return { todo, onChange, updateText, onToggle, toggle, onGetUpdateTodo };
}
