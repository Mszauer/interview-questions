function TempTracker(){
    //mode variables
    this.occurances = new Array(110).fill(0); //given our range is 0 -> 110
    this.maxOccurences = 0;
    this.mode = null;

    //mean variables
    this.totalNumbers = 0;
    this.totalSum = 0;
    this.mean = null;

    this.minTemp = null;
    this.maxTemp = null;
}

TempTracker.prototype.insert = function(temperature){
    //mode
    this.occurences[temperature]++;
    if(this.occurances[temperature] > this.maxOccurences){
        this.mode = temperature;
        this.maxOccurences = this.occurances[temperature];
    }

    //mean
    this.totalNumbers++;
    this.totalSum += temperature;
    this.mean =  this.totalSum / this.totalNumbers;

    //min / max
    if (this.maxTemp === null || temperature > this.maxTemp){
        this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp){
        this.minTemp = temperature;
    }
}

TempTracker.prototype.getMax = function(){
    return this.maxTemp;
}

TempTracker.prototype.getMin = function(){
    return this.minTemp;
}

TempTracker.prototype.getMean = function(){
    return this.mean;
}