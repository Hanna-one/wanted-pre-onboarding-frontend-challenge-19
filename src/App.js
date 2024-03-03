import { createGlobalStyle } from 'styled-components';
import { Main } from './style/style';
import List from './components/List';
import Add from './components/Add';
import { useCallback, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: "",
      text: "",
    },
    /* {
      id: 2,
      text: '컴포넌트 스타일링 하기',
    },
    {
      id: 3,
      text: '투두리스트 만들기',
    }, */
  ])

  const addTodo = useCallback(
    (text) => {
      const todo = {
        id: Date.now(),
        text,
      };
      setTodos(todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <>
      <GlobalStyle />
      <Main>
        <Add addTodo={addTodo}/>
        <List todos={todos} onRemove={onRemove}/>
      </Main>
    </>
  );
}

export default App;
