function GetProductsOfAllIntsExceptAtIndex(arr){
    //check if argument is valid
    if(arr.length < 2){
        return("Getting the product of numbers at other indices requires at least 2 numbers");
        /*
            throw new ArgumentException(
            "Getting the product of numbers at other indices requires at least 2 numbers",
            nameof(intArray));
         */
    }

    //create new container to return
    const result = new Array(arr.length);

    // find the product of all the integers before it
    let productSoFar = 1; //offset of index, the values before arr[0] don't exist so initialize to 1
    for(let i = 0; i < result.length; i++){
        result[i] = productSoFar; //values before the index
        productSoFar *= arr[i]; //store the value, memoization to not repeat calculations
    }

    productSoFar = 1; //offset of index, the values after arr[arr.length-1] don't exist so initialize to 1
    for(let i = arr.length-1; i >= 0; i--){
        result[i] *= productSoFar; //values before index * values after index
        productSoFar *= arr[i]; //store the value, memoization to not repeat calculations
    }

    return result;
}

console.log(GetProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
console.log(GetProductsOfAllIntsExceptAtIndex([0, 4, 3, 4]));
console.log(GetProductsOfAllIntsExceptAtIndex([1]));
console.log(GetProductsOfAllIntsExceptAtIndex([]));

//O(n) time / O(n) space complexity