//basic fib, but runtime = O(2^n) and we can run into call stack overflow
function fib(n){
    if (n === 0 || n === 1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// memoized solution
function Fibber(){
    this.memo = [];
}
Fibber.prototype.fib = function(n){
    //edge case of negative request
    if (n < 0){
        throw new Error("Fibonnaci is not valid with negatives");
    }

    //base case
    if (n === 0 || n === 1){
        return n;
    }
    //check if it's been memoized yet
    if (this.memo.hasOwnProperty(n)){
        return this.memo[n];
    }

    //calculate value
    const result = this.fib(n-1) + this.fib(n-2);

    //memoize result
    this.memo[n] = result;

    return result;
}
//O(n) time and O(n) space(due to memo table) where n = number of fib terms