import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import VideoCard from '../components/VideoCard';
import WordBox from '../components/WordBox';
import { DAYS_OF_WEEK } from '../utils/conts/conts';
import TimeControl from '../components/TimeControl';

const IndexPage = () => {
    const [q, setQ] = useState('');
    const [videosFounded, setVideos] = useState({});
    

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
        setVideos(data);
    }

    const cards = videosFounded.items && videosFounded.items.map((videoData => {
        return <VideoCard videoURl={videoData.id} videoTitle={videoData.title} thumb = {videoData.thumbNail.medium.url} />
    }))

    const daysOfWeek = DAYS_OF_WEEK.map(day =>  {
        return <TimeControl  />
    } )
    
    return (
        <>
            <SearchBar setQ = {setQ} q={q} searchVideos={searchVideos}/>
            {videosFounded.mostUsedWords && <WordBox words={videosFounded.mostUsedWords}/>}
            {videosFounded && cards}
        </>
    )
}

export default IndexPage;