import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoFailure, deleteTodoSuccess } from '../../store/todoSlice';

export function useTodoItemHook() {
  const { deleteTodo } = useSelector(({ todo }) => ({
    deleteTodo: todo.deleteTodo,
  }));
  const dispatch = useDispatch();

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
      window.location.replace('/todo');
    }
  });

  return { onDeleteTodo };
}
