import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  deleteTodoFailure,
  deleteTodoSuccess,
  updateTodoFailure,
  updateTodoSuccess,
} from '../../store/todoSlice';

export function useTodoItemHook() {
  const { deleteTodo, updateText, updateTodo } = useSelector(({ todo }) => ({
    deleteTodo: todo.deleteTodo,
    updateText: todo.updateText,
    updateTodo: todo.updateTodo,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(
      changeField({
        key: 'updateText',
        value,
      }),
    );
  };

  async function getUpdateCheck(id, text, completed) {
    // eslint-disable-next-line no-useless-escape
    const access_token = localStorage.getItem('token').replace(/\"/gi, '');
    try {
      await axios.put(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
        {
          todo: text,
          isCompleted: !completed,
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

  async function getUpdateTodo(id) {
    // eslint-disable-next-line no-useless-escape
    const access_token = localStorage.getItem('token').replace(/\"/gi, '');
    try {
      await axios.put(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
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
      getUpdateTodo(id);
    } else {
      return;
    }
  };

  const onGetCheckTodo = (id, text, completed) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('상태를 바꾸시겠습니까?') === true) {
      getUpdateCheck(id, text, completed);
    } else {
      return;
    }
  };

  async function getDeleteTodo(id) {
    // eslint-disable-next-line no-useless-escape
    const access_token = localStorage.getItem('token').replace(/\"/gi, '');
    try {
      await axios.delete(
        `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      dispatch(deleteTodoSuccess(true));
    } catch (e) {
      dispatch(deleteTodoFailure(e));
    }
  }

  const onDeleteTodo = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('삭제하시겠습니까?') === true) {
      getDeleteTodo(id);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (deleteTodo) {
      window.location.replace('/wanted-pre-onboarding-fe/todo');
    }
  });

  useEffect(() => {
    if (updateTodo) {
      window.location.replace('/wanted-pre-onboarding-fe/todo');
    }
  }, [updateTodo]);

  return {
    onDeleteTodo,
    onChange,
    updateText,
    onGetUpdateTodo,
    onGetCheckTodo,
  };
}
