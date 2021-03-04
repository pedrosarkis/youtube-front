import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content: space-around;
`
const Box = styled.div`
border-radius: 10px;
border: 1px solid black;
box-sizing: border-box;
padding: 5px 5px;
`


const WordBox = ({ words }) => {
    return (
        <>
            <Container>
                {words.map(word => <Box> {word}</Box>)}
            </Container>
        </>
    )
}

export default WordBox;