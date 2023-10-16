const MINEremoveFromArray = function(array) {
    let iterations = arguments.length-1;
    let toRemove = [];

    for (let i = 0; i < iterations; i++){
        toRemove.push(arguments[i+1]);
    }

    for (let j = 0; j < toRemove.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === toRemove[j]){
                array.splice(i, 1);
            }
        }
    }
    return array;
};
//  "Rest parameters" La sintáxis de los parámetros rest permiten
//  representar un número indefinido de argumentos como un array
//  El último parámetro de la definición de una función puede
//  precederse con "..." lo que hará que el resto de parámetros que
//  se envíen al llamar la función se guarden dentro de un array
const removeFromArray = function(array, ...args) {
    let newArray = [];
    array.forEach((entry)=>{
        if(!args.includes(entry))
            newArray.push(entry);
    });
    return newArray;
};

const PROremoveFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
