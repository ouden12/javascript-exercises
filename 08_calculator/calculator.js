const add = function(...args) {

  // Formá básica pero más extensa
  let suma = 0; 
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;

  // Forma un poco más compleja pero más reducida
	return args.reduce (function (acc, cur){
    return acc + cur;
  });
};

const subtract = function(...args) {
  // Aplicando el mismo método reduce() que se usó antes
	return args.reduce( (acc, cur)=> {
    return acc - cur;
  });
};

const sum = function(array) {
  if (array.length === 0) return 0;
  // Aplicando el mismo método reduce() que se usó antes
  return array.reduce ((accumulator, current)=> {
    return accumulator + current;
  });
};

const multiply = function(array,...args) {
  // Se puede utilizar reduce sin un segundo return
  // Pero hay que hacer la operación sin llaves
  return array.reduce( (total, current) => 
     total * current
  );

  // Totalmente opcional porque me dio la gana
  let result = 1;

  for (const digit of array){
    result *= digit;
  }
  
  if (arguments.length === 1)
    return result;
  for (let i = 1; i < arguments.length; i++){
    result *= arguments[i];
  }
  return result;
  
};

const power = function(x, y) {

  // Utilizando función pow() de Math
  return Math.pow(x,y);

  // A patita
  if (y === 0) return 1;
  let total = 1;
  for (let i = 1; i <= y; i++) {
    total *= x;
  }
  return total;
};

const factorial = function(num) {
	// Vamos a aplicar recursión pibe
  if (num < 0)
    return -1;
  else 
  if (num === 0 || num === 1)
    return 1;
  else {
    return num * (factorial(num - 1));
  }

  // Froot Loopssss
  if (num === 0 || num === 1) return 1;
  let loops = num-1;
  while (loops > 1){
    num *= loops;  
    loops--;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
