import React, { useState } from 'react';
import styled from 'styled-components';

const TodoBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  overflow-y: auto;
  list-style: none;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 90%;
  border-radius: 5px;
  border: 1px solid black;
`;
const Tododiv = styled.div`
  flex-grow: 1;
  font-size: 1em;
`;
const DeleteButton = styled.button`
  float: right;
  padding: 10px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
`;

function List({todos, onRemove}) {
  return (
    <TodoBox>
      {todos.map(todo =>
        <TodoItem key={todo.id}>
          <Tododiv>{todo.text}</Tododiv>
          <DeleteButton data-id={todo.id} onClick={(e)=>onRemove(todo.id)}>Delete</DeleteButton>
        </TodoItem>
      )}
    </TodoBox>
  )
}

export default List