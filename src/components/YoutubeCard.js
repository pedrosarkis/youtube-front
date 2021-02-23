import React from 'react';
import styled from 'styled-components';
import {YOUTUBE_URL} from '../utils/conts/conts';

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

const VideoCard = ({videoURl, videoTitle, thumB}) => {
    return (
    <>
    <Container>
        <a href={`${YOUTUBE_URL}${videoURl}`}> <img src={thumb}></img> </a>
        <h2 className='videoTitle'>{videoTitle}</h2>
    </Container>

    </>
    )
}

export default VideoCard;