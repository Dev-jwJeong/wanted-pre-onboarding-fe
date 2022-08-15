import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRegisterHook } from '../../hooks/auth/useRegisterHook';

const RegisterFormBlock = styled.div`
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

function RegisterForm() {
  const { form, onChange, onSignUp } = useRegisterHook();
  const [emailError, setEmailError] = useState(true);
  const [error, setError] = useState(false);

  const onCheckEmail = () => {
    const { email } = form;
    const reg =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!reg.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  useEffect(() => {
    const { password } = form;
    if (emailError === true && password.length >= 8) {
      setError(false);
    } else {
      setError(true);
    }
  }, [form, emailError]);

  return (
    <RegisterFormBlock>
      <h3>회원가입</h3>
      <form onSubmit={onSignUp}>
        <StyledInput
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          onKeyUp={onCheckEmail}
          placeholder="이메일을 입력해주세요"
        />
        <StyledInput
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledButton disabled={error}>회원가입</StyledButton>
      </form>
      <Footer>
        <Link to="/">로그인</Link>
      </Footer>
    </RegisterFormBlock>
  );
}

export default RegisterForm;
