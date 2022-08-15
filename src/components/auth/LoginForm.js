import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLoginHook } from '../../hooks/auth/useLoginHook';

const LoginFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #343a40;
    margin-bottom: 1rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #adb5bd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #495057;
  }

  & + & {
    margin-top: 1rem;
  }
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;
  background-color: #22b8cf;
  width: 100%;

  &:hover {
    background-color: #3bc9db;
  }

  &:disabled {
    background-color: #343a40;
  }
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: #868e96;
    text-decoration: underline;

    &:hover {
      color: #212529;
    }
  }
`;
function LoginForm() {
  const { onSignIn, form, onChange } = useLoginHook();
  const [error, setError] = useState(false);

  useEffect(() => {
    const { email, password } = form;
    if (email === '' || password === '') {
      setError(true);
    } else {
      setError(false);
    }
  }, [form]);
  return (
    <LoginFormBlock>
      <h3>로그인</h3>
      <form onSubmit={onSignIn}>
        <StyledInput
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="이메일을 입력해주세요"
        />
        <StyledInput
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledButton disabled={error}>로그인</StyledButton>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </LoginFormBlock>
  );
}

export default LoginForm;
