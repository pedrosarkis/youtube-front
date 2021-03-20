import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import VideoCard from '../components/VideoCard';
import WordBox from '../components/WordBox';
import { DAYS_OF_WEEK } from '../utils/conts/conts';
import TimeControl from '../components/TimeControl';
import styled from 'styled-components';
import { handleVideosByDailyTime } from '../utils/conts/helper';
import Pagination from '@material-ui/lab/Pagination';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContainerTimeInput = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
`
const IMG = styled.img`
    display: flex;
    flex-shrink:
`
const WeekDay = styled.label`
    font-size: 20px;
`

const IndexPage = () => {
    const [q, setQ] = useState('');
    const [videos, setVideos] = useState([]);
    const [dailyTime, setDailyTime] = useState({
            Monday: 900,
            Tuesday: 900,
            Wednesday: 900,
            Thursday: 900,
            Friday: 900,
            Saturday:900,
            Sunday: 900
        }
    );
    const [currentWeekPage, setCurrentWeekPage] = useState(1);
    
    const handlePageChange = (event, value) => {
        setCurrentWeekPage(value);
    }

    const [mostUsedWords, setMostUsedWords] = useState([]);

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
        setMostUsedWords(data.mostUsedWords)
        const videosByTime = handleVideosByDailyTime(data, DAYS_OF_WEEK, dailyTime);
        setVideos(videosByTime);
    } 
   
    const cards = videos?.map((weekIndex, index) => {
        if(index != currentWeekPage -1) return [];
        return Object.entries(weekIndex).map(([weekDay, videosInDay]) => (
          <>
            <WeekDay> {weekDay} </WeekDay>
            {videosInDay.map(({ id, title, thumbNail }) => (
              <VideoCard
                videoURl={id}
                videoTitle={title}
                thumb={thumbNail.medium.url}
              />
            ))}
          </>
        ));
      });

      console.log(videos);

    const daysOfWeek = DAYS_OF_WEEK.map(day => {
        return <TimeControl setTime={setDailyTime} dayOfWeek={day} actualTime={dailyTime} />
    })
    
    return (
        <>
            <SearchBar setQ = {setQ} q={q} searchVideos={searchVideos}/>
            <ContainerTimeInput>
                {daysOfWeek}
            </ContainerTimeInput>
            <MainContainer> 
                <IMG src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png'/>
                <WordBox words = {mostUsedWords}/>
                {videos.length && cards}
                {console.log(currentWeekPage)}
                <Pagination count={videos.length} page={currentWeekPage} onChange={handlePageChange}/>
            </MainContainer>
            
        </>
    )
}

export default IndexPage;