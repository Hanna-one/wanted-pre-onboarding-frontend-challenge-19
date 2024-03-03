import React from 'react';
import styled from 'styled-components';

function Add() {
const TodoInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
`;

const AddButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
`;

  return (
    <div>
      <TodoInput type="text" />
      <AddButton>Add</AddButton>
    </div>
  );
}

export default Add;