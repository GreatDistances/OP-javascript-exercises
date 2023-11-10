const convertToCelsius = function(tempF) {
  return (tempF -32) / 1.8;
};

const convertToFahrenheit = function(tempC) {
  return (tempC * 1.8 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
