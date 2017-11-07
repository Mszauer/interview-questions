function highestProductOf3(arr){ //refactor later to go up to kth element
    //check argument length
    if(arr.length < 3){
        return "Less than 3 items!";
        //        throw new ArgumentException("Less than 3 items!", nameof(arrayOfInts));
    }
    //set initial highest and lowest values
    let highest = Math.max(arr[0],arr[1]);
    let lowest = Math.min(arr[0],arr[1]);

    //calculate highest and lowest products
    let highestProductOf2 = arr[0]*arr[1];
    let lowestProductOf2 = arr[0]*arr[1];

    //calculate initial productOf3
    let highestProductOf3 = arr[0]*arr[1]*arr[2];

    //loop through each of the elements, starting at 2 (because we already got highest and lowest of 2).
    //using a greedy algorithm approach we can just multiply the previous highestProductOf2 by the current value and get the product of 3
    //however we need to keep track of lowestProductOf2, because a negative * negative = positive, which might be greater than the current highest
    //now we simply set the lowest and highest
    for(let i = 2; i < arr.length; i++){
        let current = arr[i];
        //do we have a new highest product of three?
        highestProductOf3 = Math.max(Math.max(
            highestProductOf3,
            current * highestProductOf2),
            current * lowestProductOf2); //check against current highest against highest first, then lowest

        // Do we have a new highest product of two?
        highestProductOf2 = Math.max(Math.max(
            highestProductOf2,
            current * highest),
            current * lowest);

        // Do we have a new lowest product of two?
        lowestProductOf2 = Math.min(Math.min(
            lowestProductOf2,
            current * highest),
            current * lowest);

        highest = Math.max(current,highest);
        lowest = Math.min(current,lowest);
    }
    return highestProductOf3;
}

console.log(highestProductOf3([1, 10, -5, 1, -100]));
console.log(highestProductOf3([1, 10, 2, 1, 10]));
console.log(highestProductOf3([1, 1, 1, 1, 1]));
console.log(highestProductOf3([1, 1]));

//O(n) time / O(1) space complexity