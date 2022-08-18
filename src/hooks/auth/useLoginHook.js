import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  loginFailure,
  loginSuccess,
} from '../../store/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../api/customAxios';

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
      const response = await instance.post('auth/signin', {
        email,
        password,
      });
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
      window.location.replace('/wanted-pre-onboarding-fe/todo');
      localStorage.setItem('token', JSON.stringify(auth));
    } else if (authError) {
      alert('아이디와 비밀번호가 없습니다.');
    }
  }, [auth, authError, navigate]);

  return { onSignIn, onChange, form };
}
