import React from 'react'; 
import styled from 'styled-components'; 


const WeekDay = styled.label`
    margin: 0 auto;
    margin-bottom: 4px;
    text-align: center;
`
const Input = styled.input`
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`


const TimeControl = ({setTime, dayOfWeek, actualTime }) => {
    const setDailyTime = (e) => {
        const { value } = e.target;
        setTime(actualTime => ({
            ...actualTime,
            [dayOfWeek]: value
            })
        )
    };

    return (
        <>
        <Container> 
           <WeekDay> {dayOfWeek} </WeekDay>
           <Input placeholder='Minutes' onChange={setDailyTime} value={actualTime.dayOfWeek}/> 
        </Container>
        </>
    )
}
export default TimeControl;