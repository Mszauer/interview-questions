# Interview Questions
Practice problems for interviews

### stockMaxProfit.js
given an array as input, calculate the max profit (or minimal loss) that can be generated.
Suppose we could access yesterday's stock prices as an array, where:
1.The indices are the time in minutes past trade opening time, which was 9:30am local time.
2.The values are the price in dollars of Apple stock at that time.
3.So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
Write an efficient method that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:
int[] stockPricesYesterday = { 10, 7, 5, 8, 11, 9 };
// Returns 6 (buying for $5 and selling for $11)
GetMaxProfit(stockPricesYesterday);

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
