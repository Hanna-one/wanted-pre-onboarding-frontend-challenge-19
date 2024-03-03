import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInput = styled.input`
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
`;

const AddButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
`;

function Add({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput type="text" value={value} onChange={handleChange}/>
      <AddButton type="submit">Add</AddButton>
    </form>
  );
}

export default Add;