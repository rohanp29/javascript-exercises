const sumAll = function(a, b) {
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }

    let order = [a, b].sort((a, b) => a - b);
    let sum = 0;
    for (let i = order[0]; i <= order[1]; i++) {
        if (i < 0 || !Number.isInteger(i)) {
            return 'ERROR';
        }
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
