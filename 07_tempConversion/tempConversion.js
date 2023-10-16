const convertToCelsius = function(value) {
// Fórmula: (32°F − 32) × 5/9 = 0°C
// First version
//return Number( ( (value - 32) * (5/9) ).toFixed(1) );

// Second version
  return Math.round( (value - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(value) {
// Fórmula: (0°C × 9/5) + 32 = 32
  return Number( ( (value * (9/5)) + 32 ).toFixed(1) );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
