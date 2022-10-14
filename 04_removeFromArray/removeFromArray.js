const removeFromArray = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arguments.length; j++) {
      if (arguments[j] == arr[i]) {
        const item = arr.indexOf(arguments[j]);
        arr.splice(item, 1);
        i = 0;
      } 
    }
  }
  return arr;
};

removeFromArray([1,2,3,4], 3);
removeFromArray([1,2,3,4], 3, 2);
removeFromArray([1,2,3,4], 7, "tacos");
removeFromArray([1,2,3,4], 7, 2);
removeFromArray([1,2,3,4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1,2,3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
