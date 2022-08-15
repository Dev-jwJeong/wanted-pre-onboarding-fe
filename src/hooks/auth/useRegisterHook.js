import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  registerFailure,
  registerSuccess,
} from '../../store/authSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRegisterHook() {
  const { form, registerToken } = useSelector(({ auth }) => ({
    form: auth.register,
    registerToken: auth.registerToken,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  async function signUp() {
    const { email, password } = form;
    try {
      const response = await axios.post(
        ' https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup',
        {
          email,
          password,
        },
      );
      dispatch(registerSuccess(response.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }

  const onSignUp = (e) => {
    e.preventDefault();
    signUp();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (registerToken) {
      navigate('/');
    }
  }, [navigate, registerToken]);

  return { onChange, onSignUp, form };
}
