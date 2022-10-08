const repeatString = function(string, num) {
    var text = '';
    for (let i = 0; i < num; i++) {
      text += string;
    }

    return text;
};


repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;