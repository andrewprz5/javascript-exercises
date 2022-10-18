const ftoc = function(temp) {
  temp = (temp - 32) * .5556;
  temp = Math.round(temp * 10) / 10;
  return temp;
};

const ctof = function(temp) {
  temp = (temp * 1.8) + 32;
  temp = Math.round(temp * 10) / 10;
  return temp;
};

ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
