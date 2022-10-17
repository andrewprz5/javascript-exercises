const sumAll = function(first, second) {
    var finalSum = 0;
    var higherNum = second;
    var lowerNum = first;
    if (first > second) {
      higherNum = first;
      lowerNum = second;
    }
    for (let i = lowerNum; i <= higherNum; i++) {
      finalSum += i;
    } 
    if (lowerNum < 0 || higherNum < 0) {
      console.log("ERROR");
    } else if (typeof lowerNum == "number" && typeof higherNum == "number") {
      console.log(finalSum);
    } else {
      console.log("ERROR");
    }
}; 


  sumAll(1,4);
  sumAll(1, 4000);
  sumAll(123, 1);
  sumAll(-10, 4);
  sumAll(10, "90");
  sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
