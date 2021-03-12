const handleVideosByDailyTime = ({ items }, daysOfWeek, dailyTime ) => {
    const longestDuration = Object.values(dailyTime).reduce((a, b) => Math.max(a, b));
    
    const filteredVideos = items.filter(({contentDetails}) => {
        return contentDetails.duration <= longestDuration;
    })
    const videosGroupedByDay = daysOfWeek.reduce((acc, curr) => {
        acc[curr] = [];
        return acc;
    }, {})

    const weeksWithVideos = [];

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
        
        dayIndex++;
        if(dayIndex > 6) {
            dayIndex = 0;
            weeksWithVideos.push(clone(videosGroupedByDay));
            resetObj(videosGroupedByDay);
        }
        
        dayDurationLeft = 0;
    }
    return weeksWithVideos;
}

const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

const resetObj = (obj) => {
    for( let prop in obj) {
        obj[prop] = [];
    }
}

module.exports = {
    handleVideosByDailyTime
}