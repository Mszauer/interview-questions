function mergeRanges(meetings){
    //deep copy meetings array
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));

    //use built in sort of array
    let sortedMeetings = meetingsCopy
                        .slice()
                        .sort( function(a,b){
                            return a.startTime > b.startTime ? 1 : -1;
                        });

    //intiialize mergedMeetings (with the first starting one)
    let mergedMeetings = [sortedMeetings[0]];
    for (let i = 1; i < sortedMeetings.length; i++){
        //get the current meeting
        const currentMeeting = sortedMeetings[i];

        //get the last meeting that was merged into the result
        const lastMergedMeeting = sortedMeetings[mergedMeetings.length-1];

        //if the current and last meetings overlap, use the latest end time
        if(currentMeeting.startTime <= lastMergedMeeting.endTime){
            //we know that the current meeting starts before the previous has ended
            //and we find the new end time of the merged meetings
            lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
        }
        else{
            //there's a time conflict so just push the meeting
            mergedMeetings.push(lastMergedMeeting);
        }
    }
    return mergedMeetings;
}

console.log(mergeRanges([{startTime: 1, endTime:4},{startTime: 3, endTime:6}]));

//O(n lg n) time, O(n) space