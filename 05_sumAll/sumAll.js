const sumAll = function(firstNum, lastNum) {

    if (typeof firstNum !== 'number' || typeof lastNum !== 'number'
        || firstNum < 0 || lastNum < 0) {
        return 'ERROR';
    }

    if (firstNum > lastNum) {
        // swap values
        [firstNum, lastNum] = [lastNum, firstNum];
    }
    
    let sum = 0;
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
