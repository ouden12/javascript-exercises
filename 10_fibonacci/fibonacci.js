// Fibonacci 4 debe ser 3
// 1+2+3+4
// f0 = 0
// f1 = 1
// f2 = 1
// f3 = 2
// f4 = 3
// f5 = 5
// recibimos un index

const fibonacci = function(index=1) {
    if ( index < 0 ) return "OOPS";
    if ( index === 0 ) return 0;

    let first = 0;
    let second = 0;
    let result = 1;
    for (let i = 2; i <= index; i++) {
        second = first;
        first = result;
        result = first + second;
    }
    return result;   
};

// Do not edit below this line
module.exports = fibonacci;
