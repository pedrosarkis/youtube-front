const handleVideosByDailyTime = ({ items }, daysOfWeek, dailyTime ) => {
    //const longestVideoDuration = items.reduce((a , b) => Math.max(a.contentDetails.duration, b.contentDetails.duration)).contentDetails.duration;
    const initialObject = daysOfWeek.reduce((acc, curr) => {
        acc[curr] = [];
        return acc;
    }, {})

    let dayIndex = 0;
    let dayDurationLeft = 0;
    const videosGroupedByDay = items.reduce((acc, curr, index) => {
        dayDurationLeft = dayDurationLeft || dailyTime[daysOfWeek[dayIndex]];
        const { duration } = curr.contentDetails;
        debugger;
        
        if((dayDurationLeft - duration) >= 0) {
            dayDurationLeft = dayDurationLeft - duration;
            acc[daysOfWeek[dayIndex]].push(curr);
            return acc;
        }

        dayIndex += 1;
        dayDurationLeft = 0;
        return acc;
    }, initialObject)
    return videosGroupedByDay;
}

module.exports = {
    handleVideosByDailyTime
}