function changePossibilities(amount, denominations){
    const combinations = new Array(amount + 1).fill(0);
    combinations[0] = 1;

    //go through each of the denominations
    denominations.map( (denomination) => {
        //foreach denomination, go from the coin value up to desired amount
        for(let i = denomination; i <= amount; i++){
            //calculate place in array to look at for previously calculated combinations
            //then add that value in memory to current value in array
            combinations[i] += combinations[i - denomination];
            // visualizeHelper(combinations)
        //    this ultimately builds ontop of each previously calculated denomination.
        //example:
        //denom = 1, you can only make each value in one variation
        //denom = 2, now the 2nd index in combinations will look at the value at 0th index, and add it (2combinations now)
        }
    });
    //Old way
    // for(let i = 1; i < combinations.length; i++){
    //     for(let j = combinations[i]; j <= amount; j++){
    //         let remainder = j - combinations[i];
    //         combinations[i] += combinations[remainder];
    //     }
    // }

    return combinations[amount];
}

function visualizeHelper(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i] + " ");
    }
    console.log("");
}

console.log(changePossibilities(12,[1,2,5]));

//Dynamic programming method, non-recursive
//O(n*m) time, O(n) additional space where n=money and m=denominations
