const handleVideosByDailyTime = ({ items }, daysOfWeek, dailyTime ) => {
    const longestDuration = Object.values(dailyTime).reduce((a, b) => Math.max(a, b));
    
    const filteredVideos = items.filter(({contentDetails}) => {
        return contentDetails.duration <= longestDuration;
    })
    const videosGroupedByDay = daysOfWeek.reduce((acc, curr) => {
        acc[curr] = [];
        return acc;
    }, {})

    let dayIndex = 0;
    let dayDurationLeft = 0;
     for(let video of filteredVideos) {
        dayDurationLeft = dayDurationLeft || dailyTime[daysOfWeek[dayIndex]];
        const { duration } = video.contentDetails;
        const currentDuration = dayDurationLeft - duration;
        if(currentDuration >= 0) {
            dayDurationLeft = currentDuration;
            videosGroupedByDay[daysOfWeek[dayIndex]].push(video);
            continue;
        }

        dayIndex += 1;
        dayDurationLeft = 0;
    }
    return videosGroupedByDay;
}

module.exports = {
    handleVideosByDailyTime
}