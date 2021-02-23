import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import YoutubeCard from '../components/YoutubeCard';

const IndexPage = () => {
    const [q, setQ] = useState('');
    const [videosFounded, setVideos] = useState();

    const searchVideos = async  () => {
        const settings =  {
            method: 'POST',
            headers: {
                
            },
            body: JSON.stringify(q)
        };
        
        const response = await fetch('https://localhost:8080/search', settings);
        const data = await response.json();
        setVideos(data);
    }
    const cards = data.map((videoData => {
        return <YoutubeCard videoURl={videoData.url} videoTitle={videoData.title} />
    }))
    return ( 
        <>
        <SearchBar setQ = {setQ}/>
        {videosFounded && cards}
        </>
    )

}

export default IndexPage;