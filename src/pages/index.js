import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import VideoCard from '../components/VideoCard';
import WordBox from '../components/WordBox';
import { DAYS_OF_WEEK } from '../utils/conts/conts';
import TimeControl from '../components/TimeControl';
import styled from 'styled-components';
import { handleVideosByDailyTime } from '../utils/conts/helper';

const ContainerTimeInput = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
`

const IndexPage = () => {
    const [q, setQ] = useState('');
    const [videosFounded, setVideos] = useState({});
    const [dailyTime, setDailyTime] = useState({});
    

    const searchVideos = async  (query) => {
        const settings =  {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query)
        };
        
        const response = await fetch('http://localhost:8080/searchMock', settings);
        const data = await response.json();
        const videosByTime = handleVideosByDailyTime(data, DAYS_OF_WEEK, dailyTime);
        console.log(videosByTime);
        setVideos(data);
    }

    const cards = videosFounded.items && videosFounded.items.map(({id, title, thumbNail}) => {
        return <VideoCard videoURl={id} videoTitle={title} thumb = {thumbNail.medium.url} />
    })

    const daysOfWeek = DAYS_OF_WEEK.map(day => {
        return <TimeControl setTime={setDailyTime} dayOfWeek={day} actualTime={dailyTime} />
    })
    
    return (
        <>
            <SearchBar setQ = {setQ} q={q} searchVideos={searchVideos}/>
            <ContainerTimeInput>
                {daysOfWeek}
            </ContainerTimeInput>
            {videosFounded.mostUsedWords && <WordBox words={videosFounded.mostUsedWords}/>}
            {videosFounded && cards}
        </>
    )
}

export default IndexPage;