import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import YoutubeCard from '../components/YoutubeCard';

const IndexPage = () => {
    const [q, setQ] = useState('');
    const [videosFounded, setVideos] = useState([]);

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

    console.log(videosFounded);
    
    
    const cards = videosFounded.map((videoData => {
        return <YoutubeCard videoURl={videoData.id} videoTitle={videoData.title} thumb ={videoData.thumbNail.medium.url} />
    }))
    return ( 
        <>
        <SearchBar setQ = {setQ} q={q} searchVideos= {searchVideos}/>
        {videosFounded && cards}
        </>
    )

}

export default IndexPage;