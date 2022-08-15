import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  loginFailure,
  loginSuccess,
} from '../../store/authSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLoginHook() {
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  async function signIn() {
    const { email, password } = form;
    try {
      const response = await axios.post(
        ' https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin',
        {
          email,
          password,
        },
      );
      dispatch(loginSuccess(response.data.access_token));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  }

  const onSignIn = (e) => {
    e.preventDefault();
    signIn();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      window.location.replace('/todo');
      localStorage.setItem('token', JSON.stringify(auth));
    } else if (authError) {
      alert('아이디와 비밀번호가 없습니다.');
    }
  }, [auth, authError, navigate]);

  return { onSignIn, onChange, form };
}
