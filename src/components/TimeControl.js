import React from 'react'; 
import styled from 'styled-components'; 


const WeekDay = styled.label`
`
const Input = styled.input`

`

const TimeControl = ({setTime, dayOfWeek, }) => {
    return (
        <>
        <WeekDay> {dayOfWeek} </WeekDay>
        <Input></Input>

        </>
    )
}
export default TimeControl;