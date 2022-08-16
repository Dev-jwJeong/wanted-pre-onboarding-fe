import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .content {
    background-color: white;
  }
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      <div className="content">{children}</div>
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
