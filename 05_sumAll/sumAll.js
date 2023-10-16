const sumAll = function(a,b) {
    let first, second;
    if ((a < 0 ||  typeof a != "number" ) || (b < 0 || typeof b != "number"))
        return "ERROR";

    if (a < b){
        first = a;
        second = b;
    } else {
        first = b;
        second = a;
    }
    /**
     * Alternative (better)
        if (min > max) {
            const temp = min;
            min = max;
            max = temp;
        }
     */
    
    let result = first;
    do {
        first++;
        result += first;
    }while (first != second)
    return result;
};

// Do not edit below this line
module.exports = sumAll;
