const removeFromArray = function(arr) {
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] < arr.length || typeof arguments[i] === 'string') {
        const item = arr.indexOf(arguments[i]);
        arr.splice(item, 1);
      }

    }
    
    console.log(arr);        
};

  removeFromArray([1,2,3,4], 3);
  removeFromArray([1,2,3,4], 3, 2);
  removeFromArray([1,2,3,4], 7, "tacos");
  removeFromArray([1,2,3,4], 7, 2);
  removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
  removeFromArray([1,2,3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
