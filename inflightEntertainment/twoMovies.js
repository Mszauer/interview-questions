function canTwoMoviesFillFlight(movieLengths, flightLength){
    let movieLengthsSeen = new Set();

    for (let i = 0 ; i < movieLengths.length; i++){
        //length of the current movie
        let firstMovieLength = movieLengths[i];

        //length of remaining flight time
        const secondMovieLength = flightLength - firstMovieLength;

        //check if set contains the compliment
        if (movieLengthsSeen.has(secondMovieLength)){
            //compliment found (could return this movie and movie inside set, but it's just t/f
            return true;
        }

        movieLengthsSeen.add(firstMovieLength);
    }
    //we never found two movies
    return false;
}

//O(n) time and O(n) space, where n = number of movies available for viewing

/*
What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?
    use Math.abs to find the range
What if we wanted to fill the flight length as nicely as possible with any number of movies (not just 2)?
    use recursion?
What if we knew that movieLengths was sorted? Could we save some space and/or time?
    if sorted, use binary search and save space, some time
 */