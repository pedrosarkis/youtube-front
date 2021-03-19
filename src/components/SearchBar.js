import React from 'react';
import styled from 'styled-components';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const SearchInput = styled.input`
    border: 1px solid grey;
    border-radius: 5px;
    height: 20px;
    
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;

`
const Container = styled.div`
justify-content:center;
display:flex;
flex-direction: row;
`

const SearchBar = ({setQ, searchVideos, q}) => {
    const setValue = (e) => {
        const value = e.target.value;
        setQ(value);
    }
    return (
    <>
    <Container>
        <SearchInput onChange={setValue}/>
        <button onClick={() => {searchVideos({q})}} >Search</button>
    </Container>
    </>
    )
  
}

export default SearchBar;