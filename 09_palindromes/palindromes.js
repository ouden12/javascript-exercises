const palindromes = function (string) {
    // console.log("OG string: " + string);
    // console.log("Flipped: " + string.split('').reverse().join(''));
    // return string === string.split('').reverse().join('');

    console.log("OG string: " + string);

    // Se utiliza una expresión regular con la finalidad
    // de hacer filtrar la cadena de texto original
    // y borrar los caracteres no relevantes para
    // la comparación que se quiere realizar
    // Es decir, cualquier caracter no alfanumérico.

    // Sintaxis de la regExp: 
    // a-z detecta todas las letras
    // 0-9 detecta todos los números
    // ^ es un negado, invierte la búsqueda
    // /g es un modificador de búsqueda global
    // resultado final: /[^a-z0-9]/g

    const processedString = 
    string.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    const flippedString = processedString.split("").reverse().join("")

    console.log ("String procesada: " + processedString);
    console.log ("String volteada: " + flippedString);
    
    return flippedString == processedString;
};

// Do not edit below this line
module.exports = palindromes;
