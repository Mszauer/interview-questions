const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotation point
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

function findRotationPoint(words){
    const firstWord = words[0];

    let floorIndex = 0;
    let ceilingIndex = words.length-1;

    while (floorIndex < ceilingIndex){
        //pick a point in the middle
        let rotationPoint = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

        if (words[rotationPoint] >= firstWord){
            //go to the right
            floorIndex = rotationPoint;
        } else{
            //go to the left
            ceilingIndex = rotationPoint
        }

        if (floorIndex+1 === ceilingIndex){
            // between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            break;
        }
    }

    return ceilingIndex;
}

//Worst Case: O(n) time, if the words are already sorted, or rotation point is at start/end +- 1