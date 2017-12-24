function fib(n){
    //edge case of negatives
    if (n < 0 ){
        throw new Error("Cant fib negative numbers");
    }
    else if (n === 0 || n === 1){
        return n;
    }

    let prevPrev = 0; //0th fib term
    let prev = 1; //1st fib
    let current; //current fib term

    for (let i = 1; i < n; ++i){
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}
//O(n) time where n = nth term in fib sequence, and O(1) space