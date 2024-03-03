import React from 'react';
import styled from 'styled-components';

function List() {
  const TodoBox = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    overflow-y: auto;
  `;
  const TodoItem = styled.div`
    flex-grow: 1;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid black;
  `;

  const DeleteButton = styled.button`
    float: right;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;
  `;

  return (
    <TodoBox>
      <TodoItem>
        list1
      </TodoItem>
      <DeleteButton>Delete</DeleteButton>
    </TodoBox>
  )
}

export default List