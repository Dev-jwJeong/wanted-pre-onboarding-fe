import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  background-color: #343a40;
  width: 100%;

  &:hover {
    background-color: #868e96;
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
  return (
    <RegisterFormBlock>
      <h3>회원가입</h3>
      <form>
        <StyledInput
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <StyledInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <StyledButton>회원가입</StyledButton>
      </form>
      <Footer>
        <Link to="/">로그인</Link>
      </Footer>
    </RegisterFormBlock>
  );
}

export default RegisterForm;
