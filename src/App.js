import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Main } from './style/style';
import List from './components/List';
import Add from './components/Add';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Add />
        <List />
      </Main>
    </>
  );
}

export default App;
