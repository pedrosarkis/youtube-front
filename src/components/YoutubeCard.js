import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  height: 200px;
  border: 1px solid red;
  border-radius: 15px;
  justify-content: space-around;
  color: red;
`;

const Content = styled.div`
 align-self: center;
 flex-wrap: wrap;
 `

const VideoCard = ({videoURl, videoTitle}) => {
    return (
    <>
    <Container>
        <iframe width="300px" height="200px" src="https://www.youtube.com/embed/iTznx46uiAQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 className='videoTitle'>{videoTitle}</h2>
    </Container>

    </>
    )
}

export default VideoCard;