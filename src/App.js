import logo from './logo.svg';


import IndexPage from '../src/pages/index';
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;

`

function App() {
  return (
    <>
         <IndexPage/>
    </>
  );
}

export default App;
