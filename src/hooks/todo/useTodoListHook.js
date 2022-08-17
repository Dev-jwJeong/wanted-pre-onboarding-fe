import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoFailure, getTodoSuccess } from '../../store/todoSlice';

export function useTodoListHook() {
  const { todo } = useSelector(({ todo }) => ({
    todo: todo.todo,
  }));
  const dispatch = useDispatch();

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

  return {
    todo,
  };
}
