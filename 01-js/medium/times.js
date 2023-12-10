/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function sum(start, end) {
    res = 0;
    while (start <= end) {
        res += start;
        ++start;
    }
    return res;
}

function calculateTime(n) {
    startTime = Date.now();
    sum(1, n);
    endTime = Date.now();
    console.log(`Time taken for Sum of ${n} is ${Math.floor((endTime - startTime) / 1000) == 0 ? `${(endTime - startTime)} milliseconds` : `${Math.floor((endTime - startTime) / 1000)} seconds`} `);
}


calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);