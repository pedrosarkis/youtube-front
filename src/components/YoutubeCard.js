import React from 'react';
import styled from 'styled-components';
import {YOUTUBE_URL} from '../utils/conts/conts';

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  color: red;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 2px;
  
`;

const VideoTitle = styled.h2`
font-size: 15px;
margin-top:0px;
`


const VideoCard = ({videoURl, videoTitle, thumb}) => {
    return (
    <>
    <Container>
          <a href={`${YOUTUBE_URL}${videoURl}`}  target='_blank'> <img src={thumb}></img> </a>
          <VideoTitle className='videoTitle'>{videoTitle}</VideoTitle>
    </Container>

    </>
    )
}

export default VideoCard;