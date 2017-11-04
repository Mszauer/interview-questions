
function getMaxProfit(stockPrices){
    if (stockPrices.length < 2){
        return "Getting a profit requires at least 2 prices!";
        /*
        alternative in strongly typed languages:
        throw new ArgumentException("Getting a profit requires at least 2 prices",
                                    nameof(stockPrices));
         */
    }

    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
    for(let i = 1 ; i < stockPrices.length; i++){ //start at index 1 because max profit calculates for day 0 already
        //calculate profit before, as we can't buy and sell the same day
        let potentialProfit = stockPrices[i] - minPrice;
        maxProfit = Math.max(potentialProfit,maxProfit);

        //update min price for the day
        minPrice = Math.min(minPrice,stockPrices[i]);
    }
    return maxProfit;
}

const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
const stockPricesYesterdayLoss = [10, 9, 8, 7, 6, 5]; //edge case of all loss
const stockPricesYesterdayProf = [10, 11, 12, 13, 14, 15]; //edge case of all profit
const stockPricesBigLoss = [100,33,0];

console.log(getMaxProfit(stockPricesYesterday));
console.log(getMaxProfit(stockPricesYesterdayLoss));
console.log(getMaxProfit(stockPricesYesterdayProf));
console.log(getMaxProfit(stockPricesBigLoss));

console.log(getMaxProfit([1]));
console.log(getMaxProfit([1,2]));

/*
O(n) time, looping through the array once
O(1) space
Uses greedy algorithm to calculate best profit, so far (and updates on each iteration)
 */