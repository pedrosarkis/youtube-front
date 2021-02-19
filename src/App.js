import logo from './logo.svg';

import YoutubeCard from '../src/components/YoutubeCard';
import SearchBar from '../src/components/SearchBar';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;

`

function App() {
  return (
    <>
          <Container>
            <SearchBar/>
            <YoutubeCard/>
          </Container>



    </>
  );
}

export default App;
